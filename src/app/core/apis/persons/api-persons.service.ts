import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ExistNotSupport, RestApiClientService } from '@library/rest-api-client';
import { environment } from '@env/environment';

import { Person } from '@core/apis/persons/person.interface';
import { ApiModule } from '../api.module';

// Use when either method are not supported on backend site
// @FetchByIdNotSupport()
// @CreateNotSupport()
@ExistNotSupport()
@Injectable({
  providedIn: ApiModule
})
export class ApiPersonsService extends RestApiClientService<Person> {
  protected resourceUri = 'persons';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
