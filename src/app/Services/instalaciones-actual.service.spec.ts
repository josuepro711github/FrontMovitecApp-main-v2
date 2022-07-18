import { TestBed } from '@angular/core/testing';

import { InstalacionesActualService } from './instalaciones-actual.service';

describe('InstalacionesActualService', () => {
  let service: InstalacionesActualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstalacionesActualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
