import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProcessingRequestsService, ProcessingRequestData } from '../../services/processing-requests.service';

@Component({
  selector: 'app-processing-requests',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './processing-requests.html',
  styleUrl: './processing-requests.css'
})
export class ProcessingRequests implements OnInit {
  processingRequests: ProcessingRequestData[] = [];
  processingRequestNumber: string = '';
  caseNumberRequestSource: string = '';
  requestType: string = '';
  status: string = '';
  taxRegion: string = '';
  taxOffice: string = '';
  
  private processingRequestsService = inject(ProcessingRequestsService);

  ngOnInit(): void {
    this.processingRequestsService.getProcessingRequests().subscribe(data => {
      this.processingRequests = data;
    });
  }

  selectProcessingRequest(request: ProcessingRequestData): void {
    console.log('Selected processing request:', request);
  }

  searchPRCase(): void {
    console.log('Searching PR cases with:', {
      processingRequestNumber: this.processingRequestNumber,
      caseNumberRequestSource: this.caseNumberRequestSource,
      requestType: this.requestType,
      status: this.status,
      taxRegion: this.taxRegion,
      taxOffice: this.taxOffice
    });
  }
}