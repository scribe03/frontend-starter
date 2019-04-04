import { TestBed } from '@angular/core/testing';

import { ListCompaniesService } from './list-companies.service';

describe('ListCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCompaniesService = TestBed.get(ListCompaniesService);
    expect(service).toBeTruthy();
  });
});
