import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ExistNotSupport, RestApiClientService } from '@scribe';
import { environment } from '@env/environment';

import { Person } from '@master/core/apis/persons/person.interface';

// Use when either method are not supported on backend site
// @FetchByIdNotSupport()
// @CreateNotSupport()
@ExistNotSupport()
@Injectable({
  providedIn: 'root'
})
export class ApiPersonsService extends RestApiClientService<Person> {
  protected resourceUri = 'persons';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
