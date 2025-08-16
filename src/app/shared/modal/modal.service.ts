import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Type,
  createComponent
} from '@angular/core';
import { ModalRef } from './modal-ref';
import { ModalShellComponent } from './modal.component';

export interface ModalConfig<D = any> {
  title?: string;
  data?: D;
  showFooter?: boolean;
  dismissOnBackdrop?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  open<TComponent, TData = any, TResult = any>(
    component: Type<TComponent>,
    config: ModalConfig<TData> = {}
  ): ModalRef<TComponent, TResult> {
    const modalRef = new ModalRef<TComponent, TResult>();

    // Create shell
    const shellRef = createComponent(ModalShellComponent, {
      environmentInjector: this.injector
    });
    shellRef.instance.title = config.title || '';
    shellRef.instance.showFooter = config.showFooter ?? true;
    shellRef.instance.dismissOnBackdrop = config.dismissOnBackdrop ?? true;
    shellRef.instance.close.subscribe(() => modalRef.close());

    // Create inner component
    const innerRef = createComponent(component, {
      environmentInjector: this.injector
    });
    modalRef.componentInstance = innerRef.instance;

    // Provide data if component has 'data' input
    if (config.data && 'data' in (innerRef.instance as any)) {
      (innerRef.instance as any).data = config.data;
    }

    // If component exposes close / confirm events, wire them
    const maybeAny = innerRef.instance as any;
    if (maybeAny.close && maybeAny.close.subscribe) {
      maybeAny.close.subscribe((r: any) => modalRef.close(r));
    }
    if (maybeAny.confirm && maybeAny.confirm.subscribe) {
      maybeAny.confirm.subscribe((r: any) => modalRef.close(r));
    }
    if (maybeAny.cancel && maybeAny.cancel.subscribe) {
      maybeAny.cancel.subscribe(() => modalRef.close(undefined));
    }

    // Attach views
    this.appRef.attachView(shellRef.hostView);
    this.appRef.attachView(innerRef.hostView);

    // Project inner component root node into shell body section
    const shellEl = (shellRef.location.nativeElement as HTMLElement);
    const bodyEl = shellEl.querySelector('.modal-body');
    bodyEl?.appendChild(innerRef.location.nativeElement);

    document.body.appendChild(shellEl);

    modalRef.afterClosed().subscribe(() => {
      // Cleanup
      this.appRef.detachView(innerRef.hostView);
      innerRef.destroy();
      this.appRef.detachView(shellRef.hostView);
      shellRef.destroy();
      shellEl.remove();
    });

    return modalRef;
  }
}
