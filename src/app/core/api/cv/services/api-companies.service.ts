import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from '@core/api/cv/models/company.interface';
import { ApiCvModule } from '@core/api/cv/api-cv.module';

import { RestApiClientService } from '@sharedlib/rest-api-client';
import { environment } from '@env/environment';

@Injectable({
    providedIn: ApiCvModule
})
export class ApiCompaniesService extends RestApiClientService<Company> {
    protected resourceUri = 'companies';

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.apis.cv);
    }
}
