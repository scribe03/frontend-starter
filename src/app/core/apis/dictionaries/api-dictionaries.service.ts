import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { QueryCriteria, RestApiClientService } from '@library/rest-api-client';
import { environment } from '@env/environment';
import { Dictionary } from '@core/apis/dictionaries/dictionary.interface';
import { ApiModule } from '../api.module';

@Injectable({
    providedIn: ApiModule
})
export class ApiDictionariesService extends RestApiClientService<Dictionary> {
    protected resourceUri = 'dictionaries';

    constructor(private client: HttpClient) {
        super(client, environment.apis.cv);
    }

    public fetchCollectionById(id: number | string, queryCriteria: QueryCriteria[] = null): Observable<Dictionary[]> {
        return this.client.request('GET', this.getUrl(id, queryCriteria), this.getOptions());
    }
}
