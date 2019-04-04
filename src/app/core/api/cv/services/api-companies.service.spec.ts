import { TestBed } from '@angular/core/testing';

import { ApiCompaniesService } from './api-companies.service';

describe('ApiCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCompaniesService = TestBed.get(ApiCompaniesService);
    expect(service).toBeTruthy();
  });
});
