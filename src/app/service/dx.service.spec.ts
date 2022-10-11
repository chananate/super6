import { TestBed } from '@angular/core/testing';

import { DxService } from './dx.service';

describe('DxService', () => {
  let service: DxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
