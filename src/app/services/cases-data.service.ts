import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CaseData {
  id: number;
  caseNumber: string;
  taxpayerIdNumber: string;
  taxpayerName: string;
  caseType: string;
  caseStatus: string;
  caseStatusPortal: string;
  caseSource: string;
  created: string;
  isClosed: boolean;
  workflowStep: string;
  taxRegion: string;
  taxOffice: string;
}

@Injectable({
  providedIn: 'root'
})
export class CasesDataService {
  private dummyData: CaseData[] = [
    {
      id: 1,
      caseNumber: 'CS-2024-001',
      taxpayerIdNumber: 'TIN-123456789',
      taxpayerName: 'John Smith Corp',
      caseType: 'Tax Audit',
      caseStatus: 'In Progress',
      caseStatusPortal: 'Under Review',
      caseSource: 'System Generated',
      created: '2024-01-15',
      isClosed: false,
      workflowStep: 'Document Review',
      taxRegion: 'North Region',
      taxOffice: 'Regional Office A'
    },
    {
      id: 2,
      caseNumber: 'CS-2024-002',
      taxpayerIdNumber: 'TIN-987654321',
      taxpayerName: 'ABC Manufacturing Ltd',
      caseType: 'VAT Compliance',
      caseStatus: 'Pending',
      caseStatusPortal: 'Awaiting Response',
      caseSource: 'Manual Entry',
      created: '2024-01-20',
      isClosed: false,
      workflowStep: 'Initial Assessment',
      taxRegion: 'South Region',
      taxOffice: 'Regional Office B'
    },
    {
      id: 3,
      caseNumber: 'CS-2024-003',
      taxpayerIdNumber: 'TIN-456789123',
      taxpayerName: 'XYZ Services Inc',
      caseType: 'Income Tax',
      caseStatus: 'Completed',
      caseStatusPortal: 'Resolved',
      caseSource: 'External Report',
      created: '2024-01-10',
      isClosed: true,
      workflowStep: 'Case Closed',
      taxRegion: 'East Region',
      taxOffice: 'Regional Office C'
    },
    {
      id: 4,
      caseNumber: 'CS-2024-004',
      taxpayerIdNumber: 'TIN-789123456',
      taxpayerName: 'Global Trading Co',
      caseType: 'Transfer Pricing',
      caseStatus: 'In Progress',
      caseStatusPortal: 'Investigation',
      caseSource: 'Risk Assessment',
      created: '2024-01-25',
      isClosed: false,
      workflowStep: 'Field Audit',
      taxRegion: 'West Region',
      taxOffice: 'Regional Office D'
    },
    {
      id: 5,
      caseNumber: 'CS-2024-005',
      taxpayerIdNumber: 'TIN-321654987',
      taxpayerName: 'Tech Solutions Ltd',
      caseType: 'Withholding Tax',
      caseStatus: 'On Hold',
      caseStatusPortal: 'Suspended',
      caseSource: 'Taxpayer Request',
      created: '2024-02-01',
      isClosed: false,
      workflowStep: 'Legal Review',
      taxRegion: 'Central Region',
      taxOffice: 'Regional Office E'
    },
    {
      id: 6,
      caseNumber: 'CS-2024-006',
      taxpayerIdNumber: 'TIN-654987321',
      taxpayerName: 'Retail Chain Store',
      caseType: 'Sales Tax',
      caseStatus: 'In Progress',
      caseStatusPortal: 'Active',
      caseSource: 'System Generated',
      created: '2024-02-05',
      isClosed: false,
      workflowStep: 'Data Analysis',
      taxRegion: 'North Region',
      taxOffice: 'Regional Office A'
    },
    {
      id: 7,
      caseNumber: 'CS-2024-007',
      taxpayerIdNumber: 'TIN-147258369',
      taxpayerName: 'Construction Group',
      caseType: 'Property Tax',
      caseStatus: 'Completed',
      caseStatusPortal: 'Closed',
      caseSource: 'Manual Entry',
      created: '2024-01-05',
      isClosed: true,
      workflowStep: 'Case Closed',
      taxRegion: 'South Region',
      taxOffice: 'Regional Office B'
    },
    {
      id: 8,
      caseNumber: 'CS-2024-008',
      taxpayerIdNumber: 'TIN-963852741',
      taxpayerName: 'Energy Corp',
      caseType: 'Excise Tax',
      caseStatus: 'Pending',
      caseStatusPortal: 'New',
      caseSource: 'External Report',
      created: '2024-02-10',
      isClosed: false,
      workflowStep: 'Case Assignment',
      taxRegion: 'East Region',
      taxOffice: 'Regional Office C'
    }
  ];

  getCases(): Observable<CaseData[]> {
    return of(this.dummyData);
  }
}