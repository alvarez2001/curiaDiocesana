import { TestBed } from '@angular/core/testing';

import { PermitirSegunPermisoGuard } from './permitir-segun-permiso.guard';

describe('PermitirSegunPermisoGuard', () => {
  let guard: PermitirSegunPermisoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermitirSegunPermisoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
