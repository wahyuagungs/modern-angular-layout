import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaxOfficersSearchService, TaxOfficerData } from '../../services/tax-officers-search.service';

@Component({
  selector: 'app-tax-officers-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tax-officers-search.html',
  styleUrl: './tax-officers-search.css'
})
export class TaxOfficersSearch implements OnInit {
  taxOfficers: TaxOfficerData[] = [];
  namaUsernameNip: string = '';
  jabatan: string = '';
  unitOrganisasi: string = '';
  kantor: string = '';
  isPensiun: string = 'false';
  
  private taxOfficersSearchService = inject(TaxOfficersSearchService);

  ngOnInit(): void {
    this.taxOfficersSearchService.getTaxOfficers().subscribe(data => {
      this.taxOfficers = data;
    });
  }

  selectTaxOfficer(taxOfficer: TaxOfficerData): void {
    console.log('Selected tax officer:', taxOfficer);
  }

  searchTaxOfficers(): void {
    console.log('Searching tax officers with:', {
      namaUsernameNip: this.namaUsernameNip,
      jabatan: this.jabatan,
      unitOrganisasi: this.unitOrganisasi,
      kantor: this.kantor,
      isPensiun: this.isPensiun
    });
  }
}