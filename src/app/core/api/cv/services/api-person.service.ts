import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiClientService } from '@sharedlib/rest-api-client';
import { environment } from '@env/environment';

import { Person } from '../models/person.interface';
import { ApiCvModule } from '../api-cv.module';

@Injectable({
  providedIn: ApiCvModule
})
export class ApiPersonService extends RestApiClientService<Person> {
  protected resourceUri = 'persons';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
