import { TestBed } from '@angular/core/testing';

import { PlanActualService } from './plan-actual.service';

describe('PlanActualService', () => {
  let service: PlanActualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanActualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
