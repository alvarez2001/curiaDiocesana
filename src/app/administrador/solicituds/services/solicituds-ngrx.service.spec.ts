import { TestBed } from '@angular/core/testing';

import { SolicitudsNgrxService } from './solicituds-ngrx.service';

describe('SolicitudsNgrxService', () => {
  let service: SolicitudsNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudsNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
