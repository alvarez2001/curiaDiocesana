import { TestBed } from '@angular/core/testing';

import { NgrxServicesService } from './ngrx-services.service';

describe('NgrxServicesService', () => {
  let service: NgrxServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
