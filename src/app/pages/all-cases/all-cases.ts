import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CasesDataService, CaseData } from '../../services/cases-data.service';

@Component({
  selector: 'app-all-cases',
  standalone: true,
  imports: [],
  templateUrl: './all-cases.html',
  styleUrl: './all-cases.css'
})
export class AllCases implements OnInit {
  cases: CaseData[] = [];
  private casesDataService = inject(CasesDataService);
  private router = inject(Router);

  ngOnInit(): void {
    this.casesDataService.getCases().subscribe(data => {
      this.cases = data;
    });
  }

  selectCase(caseData: CaseData): void {
    this.router.navigate(['/case-general-information', caseData.id]);
  }
}
