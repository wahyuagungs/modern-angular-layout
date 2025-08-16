import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  template: `
    <p style="margin-top:0">{{ message }}</p>
    <div class="actions" modalActions>
      <button type="button" (click)="cancel.emit()">Cancel</button>
      <button type="button" class="danger" (click)="confirm.emit(true)">{{ confirmLabel }}</button>
    </div>
  `,
  styles: [`
    .actions { display: flex; justify-content: flex-end; gap: 8px; }
    button { padding: 6px 14px; cursor: pointer; }
    .danger { background:#c62828; color:#fff; border:none; }
  `]
})
export class ConfirmationDialogComponent {
  @Input() message = 'Are you sure?';
  @Input() confirmLabel = 'Confirm';
  @Output() confirm = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<void>();
}
