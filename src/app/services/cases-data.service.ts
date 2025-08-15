import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CaseData {
  RecordId: string;
  AggregateIdentifier: string;
  AggregateVersion: number;
  CaseNumber: string;
  PreviousCaseNumber: string | null;
  PreviousCaseIdentifier: string | null;
  RootCaseIdentifier: string;
  DocumentNumber: string;
  MainTaxpayerTIN: string;
  MainTaxpayerIdentifier: string;
  MainTaxpayerName: string;
  CaseType: string;
  CaseTypeName: string;
  CaseTypeDescription: string;
  CaseStatus: string;
  CaseStatusPortal: string;
  CreatedDate: string;
  CreatedByUser: string;
  IsClosed: boolean;
  WorkflowStep: string;
  TopDueDate: string;
  EndDate: string | null;
  TaxRegion: string;
  TaxOffice: string;
  CaseTypeIdentifier: string;
  WorkflowIdentifier: string;
  WorkflowStepIdentifier: string;
  CaseSource: string;
  IsReallocated: boolean;
  IsConfidential: boolean;
  TaxRegionBeforeReallocation: string | null;
  TaxOfficeBeforeReallocation: string | null;
  IsSuspended: boolean;
  CaseTypeGroup: string;
}

export interface CasesResponse {
  IsSuccessful: boolean;
  Message: string | null;
  ErrorType: number;
  Payload: {
    TotalRecords: number;
    Data: CaseData[];
    Index: any | null;
  };
  Errors: any | null;
  IsDownloadFile: boolean;
  Content: any | null;
  FileName: string | null;
  ContentType: string | null;
  Type: any | null;
  ErrorCode: number;
  DocumentId: string | null;
  SystemException: any | null;
}

@Injectable({
  providedIn: 'root'
})
export class CasesDataService {
  private mockCasesResponse: CasesResponse = {
    "IsSuccessful": true,
    "Message": null,
    "ErrorType": 0,
    "Payload": {
        "TotalRecords": 11,
        "Data": [
            {
                "RecordId": "2569c2d2-af32-48ea-a812-ef6d6de99de2",
                "AggregateIdentifier": "5a678246-6fb5-47c0-b7b9-6684c8db4be2",
                "AggregateVersion": 1,
                "CaseNumber": "P0005161738",
                "PreviousCaseNumber": null,
                "PreviousCaseIdentifier": null,
                "RootCaseIdentifier": "5a678246-6fb5-47c0-b7b9-6684c8db4be2",
                "DocumentNumber": "Case_5a678246-6fb5-47c0-b7b9-6684c8db4be2",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": "AS.26-03 Deduction or Annulment of Administrative Sanction Request (Article 36 (1) a KUP) (Portal)",
                "CaseTypeName": "AS.26-03 Deduction or Annulment of Administrative Sanction Request (Article 36 (1) a KUP) (Portal)",
                "CaseTypeDescription": "AS.26-03 Deduction or Annulment of Administrative Sanction Request (Article 36 (1) a KUP) (Portal)",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-07-10T10:14:42+07:00",
                "CreatedByUser": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "IsClosed": false,
                "WorkflowStep": "Fill Request",
                "TopDueDate": "2025-07-11T10:14:42+07:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "e4f5a0a9-8930-4620-bcd5-f66eab37639c",
                "WorkflowIdentifier": "5e68b293-a06c-4238-8a28-36e4099e7f4f",
                "WorkflowStepIdentifier": "d318bc0c-ce8d-4113-953a-8c237e8deccd",
                "CaseSource": "Portal",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Taxpayer Services - AS Forward to Relevant BP"
            },
            {
                "RecordId": "957a3fbf-6223-4b92-9057-4f5fea0a3490",
                "AggregateIdentifier": "43ad4279-5b29-4b94-8812-22f2e9775f31",
                "AggregateVersion": 1,
                "CaseNumber": "P0005316698",
                "PreviousCaseNumber": null,
                "PreviousCaseIdentifier": null,
                "RootCaseIdentifier": "43ad4279-5b29-4b94-8812-22f2e9775f31",
                "DocumentNumber": "Case_43ad4279-5b29-4b94-8812-22f2e9775f31",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": "AS.26-03 Deduction or Annulment of Administrative Sanction Request (Article 36 (1) a KUP) (Portal)",
                "CaseTypeName": "AS.26-03 Deduction or Annulment of Administrative Sanction Request (Article 36 (1) a KUP) (Portal)",
                "CaseTypeDescription": "AS.26-03 Deduction or Annulment of Administrative Sanction Request (Article 36 (1) a KUP) (Portal)",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-07-15T09:06:43+07:00",
                "CreatedByUser": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "IsClosed": false,
                "WorkflowStep": "Fill Request",
                "TopDueDate": "2025-07-16T09:06:43+07:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "e4f5a0a9-8930-4620-bcd5-f66eab37639c",
                "WorkflowIdentifier": "5e68b293-a06c-4238-8a28-36e4099e7f4f",
                "WorkflowStepIdentifier": "d318bc0c-ce8d-4113-953a-8c237e8deccd",
                "CaseSource": "Portal",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Taxpayer Services - AS Forward to Relevant BP"
            },
            {
                "RecordId": "0060cc11-eae2-430c-a989-3dbccd821062",
                "AggregateIdentifier": "7c72f0e8-e807-474b-b0f2-0136e743a225",
                "AggregateVersion": 1755077811782000035,
                "CaseNumber": "C0006659468",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_7c72f0e8-e807-474b-b0f2-0136e743a225",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:00:38+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "ada71dc4-1daa-4e56-a7ca-92c7b13d6be3",
                "AggregateIdentifier": "e4a6e22e-4457-4ba8-8e3d-637704990496",
                "AggregateVersion": 1755077852948000035,
                "CaseNumber": "C0006659550",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_e4a6e22e-4457-4ba8-8e3d-637704990496",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:01:21+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "69d5a5c5-aefd-4260-b67d-cfeb1408cd4d",
                "AggregateIdentifier": "41752502-8941-4b89-bc2a-f77109bc16f1",
                "AggregateVersion": 1755077895471000036,
                "CaseNumber": "C0006661137",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_41752502-8941-4b89-bc2a-f77109bc16f1",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:16:59+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "de2d7ec2-9d28-4217-8a91-b465e97fee3f",
                "AggregateIdentifier": "547cac0b-1eb0-4002-9ca7-73b398559d1d",
                "AggregateVersion": 1755077999789000038,
                "CaseNumber": "C0006663073",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_547cac0b-1eb0-4002-9ca7-73b398559d1d",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:35:06+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "1159efc6-e600-4728-a4d6-aca465e611f0",
                "AggregateIdentifier": "5aaa3512-06fa-4475-84d7-436ad2791d8e",
                "AggregateVersion": 1755078041251000037,
                "CaseNumber": "C0006664205",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_5aaa3512-06fa-4475-84d7-436ad2791d8e",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:45:51+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "bd26349f-7cf6-49f0-acea-5d3b563b4fde",
                "AggregateIdentifier": "ed88917c-fd07-421e-972a-87c33e54715d",
                "AggregateVersion": 1755078078451000041,
                "CaseNumber": "C0006664435",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_ed88917c-fd07-421e-972a-87c33e54715d",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:47:54+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "3fb31f8e-a6c4-4875-a5db-f48eeb97931c",
                "AggregateIdentifier": "43c05fe2-839a-4093-a4d4-6961311dfebc",
                "AggregateVersion": 1755078112901000035,
                "CaseNumber": "C0006664598",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_43c05fe2-839a-4093-a4d4-6961311dfebc",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T10:49:33+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            },
            {
                "RecordId": "6b2378c5-51d3-4e4d-9617-d4658d592111",
                "AggregateIdentifier": "e147183c-ef91-468b-9c20-9eff881b1673",
                "AggregateVersion": 1755078454786000052,
                "CaseNumber": "C0006676831",
                "PreviousCaseNumber": "C0005436596",
                "PreviousCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "RootCaseIdentifier": "e5e18bcc-dc19-4aad-9604-f43639fa285d",
                "DocumentNumber": "Case_e147183c-ef91-468b-9c20-9eff881b1673",
                "MainTaxpayerTIN": "0824990550911000",
                "MainTaxpayerIdentifier": "7aeb70cf-94e4-d37e-ad3e-96cf55c9e472",
                "MainTaxpayerName": "ZUO HUA TELECOMMUNICATION INDONESIA",
                "CaseType": " Freezing Bank Accounts and Other Financial Products",
                "CaseTypeName": "Freezing Bank Accounts and Other Financial Products",
                "CaseTypeDescription": "Freezing Bank Accounts and Other Financial Products",
                "CaseStatus": "In Progress",
                "CaseStatusPortal": "In Progress",
                "CreatedDate": "2025-08-13T13:51:50+07:00",
                "CreatedByUser": "SUJARWO ADI",
                "IsClosed": false,
                "WorkflowStep": "Select action:\n-Record Minute of Freezing Account\n- Updating balance",
                "TopDueDate": "0001-01-01T00:00:00",
                "EndDate": null,
                "TaxRegion": "290",
                "TaxOffice": "911",
                "CaseTypeIdentifier": "7246ed74-22d9-4d8e-bfdb-c65740d44736",
                "WorkflowIdentifier": "2788fa95-ae93-40de-927d-208bb7e7992f",
                "WorkflowStepIdentifier": "038fd345-fe00-484c-a157-bd557846cafa",
                "CaseSource": "Core",
                "IsReallocated": false,
                "IsConfidential": false,
                "TaxRegionBeforeReallocation": null,
                "TaxOfficeBeforeReallocation": null,
                "IsSuspended": false,
                "CaseTypeGroup": "Collection"
            }
        ],
        "Index": null
    },
    "Errors": null,
    "IsDownloadFile": false,
    "Content": null,
    "FileName": null,
    "ContentType": null,
    "Type": null,
    "ErrorCode": 0,
    "DocumentId": null,
    "SystemException": null
};

  getCases(): Observable<CaseData[]> {
    return of(this.mockCasesResponse.Payload.Data);
  }

  getCasesResponse(): Observable<CasesResponse> {
    return of(this.mockCasesResponse);
  }
}