import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Company } from '@master/core/apis/companies/company.interface';

import { RestApiClientService } from '@scribe';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiCompaniesService extends RestApiClientService<Company> {
    protected resourceUri = 'companies';

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.apis.cv);
    }
}
