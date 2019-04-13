import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { Certification } from '@master/core/apis/certifications/certification.interface';
import { RestApiClientService } from '@scribe';

@Injectable({
    providedIn: 'root'
})
export class ApiCertificationsService extends RestApiClientService<Certification> {
    protected resourceUri = 'certifications';

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.apis.cv);
    }
}
