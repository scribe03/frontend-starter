import { ApiCompaniesService } from '@core/apis/companies/api-companies.service';

describe('ApiCompaniesService', () => {
  let httpClientSpy: { request: jasmine.Spy, delete: jasmine.Spy  };
  let apiCompaniesService: ApiCompaniesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['request', 'delete']);
    apiCompaniesService = new ApiCompaniesService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(apiCompaniesService).toBeTruthy();
  });
});
