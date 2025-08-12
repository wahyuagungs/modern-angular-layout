import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaseData } from './cases-data.service';

export interface CaseDetails extends CaseData {
  description: string;
  assignedOfficer: string;
  estimatedAmount: number;
  currency: string;
  priority: string;
  lastActivity: string;
  nextReviewDate: string;
  documents: string[];
  notes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CaseDetailsService {
  private detailedCasesData: CaseDetails[] = [
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
      taxOffice: 'Regional Office A',
      description: 'Comprehensive tax audit for corporate income tax compliance review.',
      assignedOfficer: 'Sarah Johnson',
      estimatedAmount: 125000.00,
      currency: 'USD',
      priority: 'High',
      lastActivity: '2024-02-10',
      nextReviewDate: '2024-02-20',
      documents: [
        'Financial Statements 2023.pdf',
        'Tax Return 2023.pdf',
        'Supporting Documents.zip'
      ],
      notes: [
        'Initial document review completed',
        'Awaiting additional documentation from taxpayer',
        'Discrepancies found in Q3 reporting'
      ]
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
      taxOffice: 'Regional Office B',
      description: 'VAT compliance check for manufacturing operations and export transactions.',
      assignedOfficer: 'Michael Chen',
      estimatedAmount: 75000.00,
      currency: 'USD',
      priority: 'Medium',
      lastActivity: '2024-02-08',
      nextReviewDate: '2024-02-15',
      documents: [
        'VAT Returns Q4 2023.pdf',
        'Export Documentation.pdf'
      ],
      notes: [
        'VAT calculation methodology under review',
        'Export exemption claims need verification'
      ]
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
      taxOffice: 'Regional Office C',
      description: 'Income tax assessment for service industry operations.',
      assignedOfficer: 'Lisa Anderson',
      estimatedAmount: 45000.00,
      currency: 'USD',
      priority: 'Low',
      lastActivity: '2024-02-05',
      nextReviewDate: 'N/A',
      documents: [
        'Income Tax Assessment.pdf',
        'Final Report.pdf',
        'Payment Confirmation.pdf'
      ],
      notes: [
        'Assessment completed successfully',
        'Payment received in full',
        'Case closed with no outstanding issues'
      ]
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
      taxOffice: 'Regional Office D',
      description: 'Transfer pricing investigation for international transactions.',
      assignedOfficer: 'David Rodriguez',
      estimatedAmount: 300000.00,
      currency: 'USD',
      priority: 'High',
      lastActivity: '2024-02-12',
      nextReviewDate: '2024-02-25',
      documents: [
        'Transfer Pricing Documentation.pdf',
        'International Agreements.pdf',
        'Benchmarking Study.pdf'
      ],
      notes: [
        'Field audit in progress',
        'Complex international structure identified',
        'Additional economic analysis required'
      ]
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
      taxOffice: 'Regional Office E',
      description: 'Withholding tax compliance review for technology services.',
      assignedOfficer: 'Emma Wilson',
      estimatedAmount: 25000.00,
      currency: 'USD',
      priority: 'Medium',
      lastActivity: '2024-02-07',
      nextReviewDate: '2024-03-01',
      documents: [
        'Withholding Tax Returns.pdf',
        'Service Agreements.pdf'
      ],
      notes: [
        'Case suspended pending legal review',
        'Interpretation of service classification disputed',
        'Awaiting legal department guidance'
      ]
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
      taxOffice: 'Regional Office A',
      description: 'Sales tax audit for multi-location retail operations.',
      assignedOfficer: 'James Thompson',
      estimatedAmount: 85000.00,
      currency: 'USD',
      priority: 'Medium',
      lastActivity: '2024-02-11',
      nextReviewDate: '2024-02-18',
      documents: [
        'Sales Tax Returns.pdf',
        'POS System Data.xlsx',
        'Store Location Reports.pdf'
      ],
      notes: [
        'Data analysis phase in progress',
        'Multiple store locations under review',
        'POS system integration being verified'
      ]
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
      taxOffice: 'Regional Office B',
      description: 'Property tax assessment for construction and real estate holdings.',
      assignedOfficer: 'Rachel Green',
      estimatedAmount: 150000.00,
      currency: 'USD',
      priority: 'Medium',
      lastActivity: '2024-01-30',
      nextReviewDate: 'N/A',
      documents: [
        'Property Assessment.pdf',
        'Construction Permits.pdf',
        'Final Settlement.pdf'
      ],
      notes: [
        'Property valuation completed',
        'Assessment accepted by taxpayer',
        'Case successfully closed'
      ]
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
      taxOffice: 'Regional Office C',
      description: 'Excise tax compliance review for energy production and distribution.',
      assignedOfficer: 'Robert Kim',
      estimatedAmount: 200000.00,
      currency: 'USD',
      priority: 'High',
      lastActivity: '2024-02-10',
      nextReviewDate: '2024-02-17',
      documents: [
        'Excise Tax Filings.pdf',
        'Production Reports.pdf'
      ],
      notes: [
        'Case recently assigned',
        'Initial review scheduled',
        'High-value case requiring senior oversight'
      ]
    }
  ];

  getCaseById(id: number): Observable<CaseDetails | undefined> {
    const caseDetails = this.detailedCasesData.find(c => c.id === id);
    return of(caseDetails);
  }

  getAllCasesDetails(): Observable<CaseDetails[]> {
    return of(this.detailedCasesData);
  }
}