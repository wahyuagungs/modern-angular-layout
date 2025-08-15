import {Component, OnInit, inject, ChangeDetectionStrategy} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaxpayerSearchService, TaxpayerData } from '../../services/taxpayer-search.service';

@Component({
  selector: 'app-taxpayer-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './taxpayer-search.html',
  styleUrl: './taxpayer-search.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaxpayerSearch implements OnInit {
  taxpayers: TaxpayerData[] = [];
  taxpayerId: string = '';
  taxpayerName: string = '';

  private taxpayerSearchService = inject(TaxpayerSearchService);

  ngOnInit(): void {
    this.taxpayerSearchService.getTaxpayers().subscribe(data => {
      this.taxpayers = data;
    });
  }

  selectTaxpayer(taxpayer: TaxpayerData): void {
    console.log('Selected taxpayer:', taxpayer);
  }

  searchTaxpayers(): void {
    console.log('Searching taxpayers with:', {
      taxpayerId: this.taxpayerId,
      taxpayerName: this.taxpayerName
    });
  }

  resetSearch(): void {
    this.taxpayerId = '';
    this.taxpayerName = '';
    this.taxpayerSearchService.getTaxpayers().subscribe(data => {
      this.taxpayers = data;
    });
  }
}
