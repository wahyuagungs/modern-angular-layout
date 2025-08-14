import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SearchCaseRequest {
  caseNumber: string;
}

export interface SearchCaseResponse {
  success: boolean;
  data: any[];
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CaseSearchService {
  private http = inject(HttpClient);
  private apiBaseUrl = environment.apiBaseUrl;

  searchCases(searchRequest: SearchCaseRequest): Observable<SearchCaseResponse> {
    const url = `${this.apiBaseUrl}/api/v1/case/search`;
    return this.http.post<SearchCaseResponse>(url, searchRequest);
  }
}