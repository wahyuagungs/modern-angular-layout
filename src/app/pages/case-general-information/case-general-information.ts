import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CaseDetailsService, CaseDetails } from '../../services/case-details.service';

@Component({
  selector: 'app-case-general-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-general-information.html',
  styleUrl: './case-general-information.css'
})
export class CaseGeneralInformation implements OnInit {
  caseDetails: CaseDetails | undefined;
  private route = inject(ActivatedRoute);
  private caseDetailsService = inject(CaseDetailsService);

  ngOnInit(): void {
    const caseIdParam = this.route.snapshot.paramMap.get('id');
    if (caseIdParam) {
      const caseId = parseInt(caseIdParam, 10);
      this.caseDetailsService.getCaseById(caseId).subscribe(details => {
        this.caseDetails = details;
      });
    }
  }
}