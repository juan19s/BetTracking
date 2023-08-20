import { TestBed } from '@angular/core/testing';

import { PruebaapiService } from './pruebaapi.service';

describe('PruebaapiService', () => {
  let service: PruebaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
