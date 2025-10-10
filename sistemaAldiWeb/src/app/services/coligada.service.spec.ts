import { TestBed } from '@angular/core/testing';

import { ColigadaService } from './coligada.service';

describe('ColigadaService', () => {
  let service: ColigadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColigadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
