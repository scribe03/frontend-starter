import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiClientService } from '../../../../../shared-lib/rest-api-client';
import { environment } from '../../../../../../environments/environment';

import { IPerson } from '../../models/person.interface';
import { ApiCvModule } from '../../api-cv.module';

@Injectable({
  providedIn: ApiCvModule
})
export class ApiPersonService extends RestApiClientService<IPerson> {
  protected resourceUri = 'persons';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
