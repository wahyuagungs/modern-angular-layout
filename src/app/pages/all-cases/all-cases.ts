import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CasesDataService, CaseData } from '../../services/cases-data.service';
import { CaseSearchService, SearchCaseRequest } from '../../services/case-search.service';
import { CaseModal } from '../../components/case-modal/case-modal';

@Component({
  selector: 'app-all-cases',
  standalone: true,
  imports: [FormsModule, CaseModal],
  templateUrl: './all-cases.html',
  styleUrl: './all-cases.css'
})
export class AllCases implements OnInit {
  cases: CaseData[] = [];
  caseNumber: string = '';
  taxpayerId: string = '';
  showModal = false;
  selectedCase: CaseData | null = null;
  private casesDataService = inject(CasesDataService);
  private caseSearchService = inject(CaseSearchService);
  private router = inject(Router);

  ngOnInit(): void {
    this.casesDataService.getCases().subscribe(data => {
      this.cases = data;
    });
  }

  selectCase(caseData: CaseData): void {
    this.selectedCase = caseData;
    this.showModal = true;
  }

  onModalClose(): void {
    this.showModal = false;
    this.selectedCase = null;
  }

  onViewCase(caseData: CaseData): void {
    this.router.navigate(['/case-general-information', caseData.RecordId]);
    this.onModalClose();
  }

  onCancelCase(caseData: CaseData): void {
    this.onModalClose();
  }

  onCoretaxCase(caseData: CaseData): void {
    this.onModalClose();
  }

  searchCases(): void {
    if (this.caseNumber.trim()) {
      const searchRequest: SearchCaseRequest = {
        caseNumber: this.caseNumber.trim()
      };

      this.caseSearchService.searchCases(searchRequest).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Search successful:', response.data);
          } else {
            console.error('Search failed:', response.message);
          }
        },
        error: (error) => {
          console.error('Search error:', error);
        }
      });
    }
  }

  resetSearch(): void {
    this.caseNumber = '';
    this.taxpayerId = '';
    this.casesDataService.getCases().subscribe(data => {
      this.cases = data;
    });
  }
}
