import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseGeneralInformation } from './case-general-information';

describe('CaseGeneralInformation', () => {
  let component: CaseGeneralInformation;
  let fixture: ComponentFixture<CaseGeneralInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseGeneralInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseGeneralInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});