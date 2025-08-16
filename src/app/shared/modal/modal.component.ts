import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal-shell',
  standalone: true,
  template: `
    <div class="modal-backdrop" (click)="backdropClick()"></div>
    <div class="modal-window" role="dialog" aria-modal="true">
      @if (title) {
        <header class="modal-header">
          <h3>{{ title }}</h3>
          <button type="button" class="close-btn" (click)="close.emit()">×</button>
        </header>
      }
      <section class="modal-body">
        <ng-content></ng-content>
      </section>
      @if (showFooter) {
        <footer class="modal-footer">
          <ng-content select="[modalActions]"></ng-content>
        </footer>
      }
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed; inset: 0; background: rgba(0,0,0,.45); backdrop-filter: blur(2px); z-index: 1000;
    }
    .modal-window {
      position: fixed; z-index: 1001; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: #fff; border-radius: 8px; min-width: 360px; max-width: 90vw; max-height: 90vh;
      display: flex; flex-direction: column; box-shadow: 0 8px 32px rgba(0,0,0,.25);
      overflow: hidden;
    }
    .modal-header, .modal-footer { padding: 12px 16px; background: #f7f7f7; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; }
    .modal-body { padding: 16px; overflow: auto; }
    .close-btn { border: none; background: transparent; font-size: 20px; cursor: pointer; line-height: 1; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalShellComponent {
  @Input() title = '';
  @Input() dismissOnBackdrop = true;
  @Input() showFooter = true;
  @Output() close = new EventEmitter<void>();

  backdropClick() {
    if (this.dismissOnBackdrop) this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.close.emit();
  }
}
