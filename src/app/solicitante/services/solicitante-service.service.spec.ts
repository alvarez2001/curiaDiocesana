import { TestBed } from '@angular/core/testing';

import { SolicitanteServiceService } from './solicitante-service.service';

describe('SolicitanteServiceService', () => {
  let service: SolicitanteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitanteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
