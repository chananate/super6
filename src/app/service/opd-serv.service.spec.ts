import { TestBed } from '@angular/core/testing';

import { OpdServService } from './opd-serv.service';

describe('OpdServService', () => {
  let service: OpdServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
