import { TestBed } from '@angular/core/testing';

import { OrginalApiService } from './orginal-api.service';

describe('OrginalApiService', () => {
  let service: OrginalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrginalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
