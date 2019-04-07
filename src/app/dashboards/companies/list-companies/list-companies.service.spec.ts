import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListCompaniesService } from './list-companies.service';
import { ApiCompaniesService } from '@core/api/cv/services/api-companies.service';

describe('ListCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      ApiCompaniesService // add to stub !!
    ]
  }));

  it('should be created', () => {
    const service: ListCompaniesService = TestBed.get(ListCompaniesService);
    expect(service).toBeTruthy();
  });
});
