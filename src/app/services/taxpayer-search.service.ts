import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TaxpayerData {
  AggregateIdentifier: string;
  RecordId: string;
  UniqueIdentificationNumber: string;
  Name: string;
  TaxpayerType: string;
  TaxpayerCategory: string;
  TaxpayerStatus: string;
  TaxRegion: string;
  TaxOffice: string;
  RegistrationDate: string;
}

export interface TaxpayerResponse {
  IsSuccessful: boolean;
  Message: string | null;
  ErrorType: number;
  Payload: {
    TotalRecords: number;
    Data: TaxpayerData[];
    Index: any;
  };
  Errors: any;
  IsDownloadFile: boolean;
  Content: any;
  FileName: any;
  ContentType: any;
  Type: any;
  ErrorCode: number;
  DocumentId: any;
  SystemException: any;
}

@Injectable({
  providedIn: 'root'
})
export class TaxpayerSearchService {
  private taxpayerData: TaxpayerData[] = [
    {
      AggregateIdentifier: "ef89a81c-b1e7-2369-b76d-6399c11b64c4",
      RecordId: "08c28984-061f-7e64-d666-4915a885c63f",
      UniqueIdentificationNumber: "0013327010039000",
      Name: "PONDOK KALIMAYA PUTIH",
      TaxpayerType: "Corporate",
      TaxpayerCategory: "Limited Company (PT)",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "090",
      TaxOffice: "039",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "126e464f-4733-08f1-4671-6493a3c77fb0",
      RecordId: "7e4b1fd5-2098-3cb6-28e8-b15a3a04a416",
      UniqueIdentificationNumber: "0013435540001000",
      Name: "OCEANUS BERJAYA",
      TaxpayerType: "Corporate",
      TaxpayerCategory: "Limited Company (PT)",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "110",
      TaxOffice: "001",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "c6d7ffe2-fa43-46f4-986e-8671138208e8",
      RecordId: "bea9a5e2-f11c-43fa-5803-dc603ceb64a7",
      UniqueIdentificationNumber: "0015925621609000",
      Name: "PEMELIHARAAN SEKOLAH JEPANG SURABAYA",
      TaxpayerType: "Corporate",
      TaxpayerCategory: "Foundation",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "200",
      TaxOffice: "609",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "dfe1f521-f64a-696c-a81e-f12425b693e8",
      RecordId: "f46d96aa-4dea-4655-ba0b-e07698b3c9dd",
      UniqueIdentificationNumber: "0012111027609000",
      Name: "TEGOEH",
      TaxpayerType: "Corporate",
      TaxpayerCategory: "Commanditer Company (CV)",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "200",
      TaxOffice: "609",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "8fc44325-b734-d9e9-eedc-7c64385296b0",
      RecordId: "d9c227ae-d967-574d-6cb3-85805edfa07a",
      UniqueIdentificationNumber: "0016438830024000",
      Name: "SARITASARI PRISMATARA",
      TaxpayerType: "Corporate",
      TaxpayerCategory: "Limited Company (PT)",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "080",
      TaxOffice: "072",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "fb98c7b4-341c-a1e2-3a41-4965e9ea6270",
      RecordId: "6fcffe52-54e7-afc3-b2ad-f8868c527d91",
      UniqueIdentificationNumber: "3273072503470001",
      Name: "KURNIAWAN LESMANA",
      TaxpayerType: "Individual or Undevided Inheritance",
      TaxpayerCategory: "Individual",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "150",
      TaxOffice: "428",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "b53972b4-6566-c639-59d6-31ab549a030b",
      RecordId: "ceffe4b2-5252-1dd2-4a9a-e6e87fce7a8f",
      UniqueIdentificationNumber: "5171023112600370",
      Name: "I MADE SERAMAN",
      TaxpayerType: "Individual or Undevided Inheritance",
      TaxpayerCategory: "Individual",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "260",
      TaxOffice: "807",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "c6945258-a69a-7634-cab5-62fbf74cec27",
      RecordId: "5dc25e5c-f1c7-2fff-a1b1-1c30600e9dce",
      UniqueIdentificationNumber: "3173052601520004",
      Name: "DR.ADAM BACHTIAR SATIBI",
      TaxpayerType: "Individual or Undevided Inheritance",
      TaxpayerCategory: "Individual",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "090",
      TaxOffice: "035",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "8532e925-88ee-efd4-a241-06143a7f3d08",
      RecordId: "68a1b45b-3d14-d801-291d-8f88bcdcf8ea",
      UniqueIdentificationNumber: "0016757270503000",
      Name: "PUSAT REKREASI DAN PROMOSI PEMBANGUNAN JAWA TENGAH PERSERODA",
      TaxpayerType: "Corporate",
      TaxpayerCategory: "Limited Company (PT)",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "170",
      TaxOffice: "503",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    },
    {
      AggregateIdentifier: "cfc2a73a-f681-6dbf-a2f6-946d97fa31a8",
      RecordId: "252b0a66-6efc-e61e-53fb-d804308dcd39",
      UniqueIdentificationNumber: "3578261703570001",
      Name: "WONG HILMAN",
      TaxpayerType: "Individual or Undevided Inheritance",
      TaxpayerCategory: "Individual",
      TaxpayerStatus: "ACTIVE",
      TaxRegion: "200",
      TaxOffice: "619",
      RegistrationDate: "1901-01-01T00:00:00+07:07"
    }
  ];

  getTaxpayers(): Observable<TaxpayerData[]> {
    return of(this.taxpayerData);
  }

  getTaxpayersResponse(): Observable<TaxpayerResponse> {
    const response: TaxpayerResponse = {
      IsSuccessful: true,
      Message: null,
      ErrorType: 0,
      Payload: {
        TotalRecords: this.taxpayerData.length,
        Data: this.taxpayerData,
        Index: null
      },
      Errors: null,
      IsDownloadFile: false,
      Content: null,
      FileName: null,
      ContentType: null,
      Type: null,
      ErrorCode: 0,
      DocumentId: null,
      SystemException: null
    };
    return of(response);
  }

  getTaxpayerById(recordId: string): Observable<TaxpayerData | undefined> {
    const taxpayer = this.taxpayerData.find(t => t.RecordId === recordId);
    return of(taxpayer);
  }
}