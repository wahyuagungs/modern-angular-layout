import { TestBed } from '@angular/core/testing';
import { AllCases } from './all-cases';

describe('AllCases', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCases]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AllCases);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});