import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiClientService } from '@sharedlib/rest-api-client';
import { environment } from '@env/environment';

import { ApiCvModule } from '../../api-cv.module';
import { ICertification } from '../../models/certification.interface';

@Injectable({
  providedIn: ApiCvModule
})
export class ApiCertificationService extends RestApiClientService<ICertification> {
  protected resourceUri = 'certifications';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
