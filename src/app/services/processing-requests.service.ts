import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ProcessingRequestData {
  prNumber: string;
  date: string;
  requestType: string;
  requestSource: string;
  requestingUser: string;
  taxpayerId: string;
  taxRegion: string;
  taxOffice: string;
  prCaseNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProcessingRequestsService {
  private dummyData: ProcessingRequestData[] = [
    {
      prNumber: 'PR0000006178',
      date: '2025-01-09',
      requestType: 'Processing Request Audit Other Purpose',
      requestSource: 'C0000217269',
      requestingUser: 'nur.rahmawati2',
      taxpayerId: '0558939914001000',
      taxRegion: '110',
      taxOffice: '001',
      prCaseNumber: 'C0000217269'
    },
    {
      prNumber: 'PR0000007118',
      date: '2025-01-10',
      requestType: 'Processing Request Audit Other Purpose',
      requestSource: 'C0000230344',
      requestingUser: 'nur.rahmawati2',
      taxpayerId: '0558939914001000',
      taxRegion: '110',
      taxOffice: '001',
      prCaseNumber: 'C0000230344'
    },
    {
      prNumber: 'PR0000005432',
      date: '2025-01-08',
      requestType: 'Processing Request Tax Assessment',
      requestSource: 'C0000215678',
      requestingUser: 'john.doe',
      taxpayerId: '1234567890123456',
      taxRegion: '120',
      taxOffice: '002',
      prCaseNumber: 'C0000215678'
    },
    {
      prNumber: 'PR0000009876',
      date: '2025-01-12',
      requestType: 'Processing Request VAT Review',
      requestSource: 'C0000245789',
      requestingUser: 'jane.smith',
      taxpayerId: '9876543210987654',
      taxRegion: '130',
      taxOffice: '003',
      prCaseNumber: 'C0000245789'
    },
    {
      prNumber: 'PR0000011234',
      date: '2025-01-15',
      requestType: 'Processing Request Penalty Review',
      requestSource: 'C0000267890',
      requestingUser: 'ahmad.hassan',
      taxpayerId: '5555666677778888',
      taxRegion: '140',
      taxOffice: '004',
      prCaseNumber: 'C0000267890'
    }
  ];

  getProcessingRequests(): Observable<ProcessingRequestData[]> {
    return of(this.dummyData);
  }
}