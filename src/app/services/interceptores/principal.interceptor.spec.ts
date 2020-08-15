import { TestBed } from '@angular/core/testing';

import { PrincipalInterceptor } from './principal.interceptor';

describe('PrincipalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PrincipalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PrincipalInterceptor = TestBed.inject(PrincipalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
