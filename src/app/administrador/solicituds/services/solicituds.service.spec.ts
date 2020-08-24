import { TestBed } from '@angular/core/testing';

import { SolicitudsService } from './solicituds.service';

describe('SolicitudsService', () => {
  let service: SolicitudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
