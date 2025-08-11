import { TestBed } from '@angular/core/testing';
import { ProcessingRequests } from './processing-requests';

describe('ProcessingRequests', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessingRequests]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProcessingRequests);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});