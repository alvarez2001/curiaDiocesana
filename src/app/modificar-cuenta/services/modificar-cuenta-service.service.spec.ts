import { TestBed } from '@angular/core/testing';

import { ModificarCuentaServiceService } from './modificar-cuenta-service.service';

describe('ModificarCuentaServiceService', () => {
  let service: ModificarCuentaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarCuentaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
