import { TestBed } from '@angular/core/testing';
import { TaxOfficersSearch } from './tax-officers-search';

describe('TaxOfficersSearch', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxOfficersSearch]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaxOfficersSearch);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});