import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CaseData } from '../../services/cases-data.service';
import { ModalService } from '../../shared/modal/modal.service';
import { ConfirmationDialogComponent } from '../../shared/modal/confirmation-dialog.component';

@Component({
  selector: 'app-case-modal',
  standalone: true,
  imports: [],
  templateUrl: './case-modal.html',
  styleUrl: './case-modal.css'
})
export class CaseModal {
  @Input() isVisible = false;
  @Input() caseData: CaseData | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() viewCase = new EventEmitter<CaseData>();
  @Output() cancelCase = new EventEmitter<CaseData>();
  @Output() coretaxCase = new EventEmitter<CaseData>();


  constructor(private modalService: ModalService) {}

  onClose(): void {
    this.close.emit();
  }

  onViewCase(): void {
    if (this.caseData) {
      this.viewCase.emit(this.caseData);
    }
  }

  onCancelCase(): void {
    // Old approach:
    // this.showConfirmationModal = true;
    // New generic reusable modal:
    const ref = this.modalService.open(ConfirmationDialogComponent, {
      title: 'Cancel Case',
      data: { },
      dismissOnBackdrop: false
    });
    // Configure message / label dynamically
    if (ref.componentInstance) {
      ref.componentInstance.message = 'Are you sure you want to cancel this case?';
      ref.componentInstance.confirmLabel = 'Yes, Cancel';
    }
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed && this.caseData) {
        this.cancelCase.emit(this.caseData);
      }
    });
  }

  onCoretaxCase(): void {
    if (this.caseData) {
      const coretaxUrl = `https://coretax.intranet.pajak.go.id/case-management/en-US/case-overview/${this.caseData.AggregateIdentifier}`;
      window.open(coretaxUrl, '_blank');
      this.coretaxCase.emit(this.caseData);
    }
  }
}