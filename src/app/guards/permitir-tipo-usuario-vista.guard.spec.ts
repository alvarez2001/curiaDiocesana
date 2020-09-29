import { TestBed } from '@angular/core/testing';

import { PermitirTipoUsuarioVistaGuard } from './permitir-tipo-usuario-vista.guard';

describe('PermitirTipoUsuarioVistaGuard', () => {
  let guard: PermitirTipoUsuarioVistaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermitirTipoUsuarioVistaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
