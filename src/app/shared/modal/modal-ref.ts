import { Subject, Observable } from 'rxjs';

export class ModalRef<T = any, R = any> {
  private readonly closed$ = new Subject<R | undefined>();
  componentInstance?: T;

  close(result?: R) {
    this.closed$.next(result);
    this.closed$.complete();
  }

  afterClosed(): Observable<R | undefined> {
    return this.closed$.asObservable();
  }
}
