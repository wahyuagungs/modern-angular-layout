import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CaseData } from '../../services/cases-data.service';

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

  showConfirmationModal = false;

  onClose(): void {
    this.close.emit();
  }

  onViewCase(): void {
    if (this.caseData) {
      this.viewCase.emit(this.caseData);
    }
  }

  onCancelCase(): void {
    this.showConfirmationModal = true;
  }

  onCoretaxCase(): void {
    if (this.caseData) {
      const coretaxUrl = `https://coretax.intranet.pajak.go.id/case-management/en-US/case-overview/${this.caseData.AggregateIdentifier}`;
      window.open(coretaxUrl, '_blank');
      this.coretaxCase.emit(this.caseData);
    }
  }

  onConfirmCancel(): void {
    if (this.caseData) {
      this.cancelCase.emit(this.caseData);
    }
    this.showConfirmationModal = false;
  }

  onCancelConfirmation(): void {
    this.showConfirmationModal = false;
  }
}