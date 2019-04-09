import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiClientService } from '@sharedlib/rest-api-client';
import { environment } from '@env/environment';

import { ApiModule } from '../api.module';
import { Certification } from '@core/api/certifications/certification.interface';

@Injectable({
    providedIn: ApiModule
})
export class ApiCertificationsService extends RestApiClientService<Certification> {
    protected resourceUri = 'certifications';

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.apis.cv);
    }
}
