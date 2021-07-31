import { TestBed } from '@angular/core/testing';

import { LastTenInteractionsService } from './last-ten-interactions.service';

describe('LastTenInteractionsService', () => {
  let service: LastTenInteractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastTenInteractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
