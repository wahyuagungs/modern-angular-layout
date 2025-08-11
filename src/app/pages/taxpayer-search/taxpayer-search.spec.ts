import { TestBed } from '@angular/core/testing';
import { TaxpayerSearch } from './taxpayer-search';

describe('TaxpayerSearch', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxpayerSearch]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaxpayerSearch);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});