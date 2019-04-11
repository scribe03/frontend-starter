import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiClientService } from '@library/rest-api-client';
import { environment } from '@env/environment';

import { ApiModule } from '../api.module';
import { Certification } from '@core/apis/certifications/certification.interface';

@Injectable({
    providedIn: ApiModule
})
export class ApiCertificationsService extends RestApiClientService<Certification> {
    protected resourceUri = 'certifications';

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.apis.cv);
    }
}
