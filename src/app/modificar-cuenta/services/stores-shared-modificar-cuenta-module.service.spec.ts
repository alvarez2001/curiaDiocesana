import { TestBed } from '@angular/core/testing';

import { StoresSharedModificarCuentaModuleService } from './stores-shared-modificar-cuenta-module.service';

describe('StoresSharedModificarCuentaModuleService', () => {
  let service: StoresSharedModificarCuentaModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoresSharedModificarCuentaModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
