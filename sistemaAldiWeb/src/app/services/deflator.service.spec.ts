import { TestBed } from '@angular/core/testing';

import { DeflatorService } from './deflator.service';

describe('DeflatorService', () => {
  let service: DeflatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeflatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
