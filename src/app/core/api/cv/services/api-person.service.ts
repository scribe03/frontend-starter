import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ExistNotSupport, RestApiClientService } from '@sharedlib/rest-api-client';
import { environment } from '@env/environment';

import { Person } from '../models/person.interface';
import { ApiCvModule } from '../api-cv.module';

// Use when either method are not supported on backend site
// @FetchByIdNotSupport()
// @CreateNotSupport()
@ExistNotSupport()
@Injectable({
  providedIn: ApiCvModule
})
export class ApiPersonService extends RestApiClientService<Person> {
  protected resourceUri = 'persons';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
