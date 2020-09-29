import { TestBed } from '@angular/core/testing';

import { PermitirIngresoUsuarioGuard } from './permitir-ingreso-usuario.guard';

describe('PermitirIngresoUsuarioGuard', () => {
  let guard: PermitirIngresoUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermitirIngresoUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
