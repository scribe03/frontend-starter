import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQueryCriteria, RestApiClientService } from '@sharedlib/rest-api-client/src';
import { environment } from '@env/environment';
import { IDictionary } from '../../models/dictionary.interface';
import { ApiCvModule } from '../../api-cv.module';

@Injectable({
    providedIn: ApiCvModule
})
export class ApiDictionaryService extends RestApiClientService<IDictionary> {
    protected resourceUri = 'dictionaries';

    constructor(private client: HttpClient) {
        super(client, environment.apis.cv);
    }

    public fetchCollectionById(id: number | string, queryCriteria: IQueryCriteria[] = null): Observable<IDictionary[]> {
        return this.client.request('GET', this.getUrl(id, queryCriteria), this.getOptions());
    }
}
