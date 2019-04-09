import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from '@core/api/companies/company.interface';
import { ApiModule } from '@core/api/api.module';

import { RestApiClientService } from '@sharedlib/rest-api-client';
import { environment } from '@env/environment';

@Injectable({
    providedIn: ApiModule
})
export class ApiCompaniesService extends RestApiClientService<Company> {
    protected resourceUri = 'companies';

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.apis.cv);
    }
}
