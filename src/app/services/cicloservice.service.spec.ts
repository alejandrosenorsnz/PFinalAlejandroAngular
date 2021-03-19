import { TestBed } from '@angular/core/testing';

import { CicloserviceService } from './cicloservice.service';

describe('CicloserviceService', () => {
  let service: CicloserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
