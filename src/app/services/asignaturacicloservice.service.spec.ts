import { TestBed } from '@angular/core/testing';

import { AsignaturacicloserviceService } from './asignaturaservice.service';

describe('AsignaturacicloserviceService', () => {
  let service: AsignaturacicloserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturacicloserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
