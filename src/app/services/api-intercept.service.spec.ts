import { TestBed } from '@angular/core/testing';

import { ApiInterceptService } from './api-intercept.service';

describe('ApiInterceptService', () => {
  let service: ApiInterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
