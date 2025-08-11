import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesDataService, CaseData } from '../../services/cases-data.service';

@Component({
  selector: 'app-all-cases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-cases.html',
  styleUrl: './all-cases.css'
})
export class AllCases implements OnInit {
  cases: CaseData[] = [];

  constructor(private casesDataService: CasesDataService) {}

  ngOnInit(): void {
    this.casesDataService.getCases().subscribe(data => {
      this.cases = data;
    });
  }

  selectCase(caseData: CaseData): void {
    console.log('Selected case:', caseData);
  }
}