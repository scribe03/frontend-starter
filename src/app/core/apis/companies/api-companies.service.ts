import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from '@core/apis/companies/company.interface';
import { ApiModule } from '@core/apis/api.module';

import { RestApiClientService } from '@library/rest-api-client';
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
