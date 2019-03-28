import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQueryCriteria } from './query/query-criteria.interface';
import { IHttpRequestOptions } from './http-request-options.interface';

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
export type TPartialEntity<T> = {
    [P in keyof T]?: T[P];
};

export abstract class RestApiClientService<E> {
    protected resourceUri: string;
    protected resourceKeyId = 'id';
    protected options: IHttpRequestOptions = {};
    protected contentType = 'application/json';

    protected constructor(private httpClient: HttpClient, private urlApi: string) {
    }

    public fetchById(id: number | string, queryCriteria: IQueryCriteria[] = null): Observable<E> {
        return this.httpClient.request('GET', this.getUrl(id, queryCriteria), this.getOptions());
    }

    public fetch(queryCriteria: IQueryCriteria[] = null): Observable<E[]> {
        return this.httpClient.request('GET', this.getUrl(null, queryCriteria), this.getOptions());
    }

    public count(queryCriteria: IQueryCriteria[] = null): Observable<number> {
        return this.httpClient.request('GET', this.getUrl(null, queryCriteria, true), this.getOptions());
    }

    // Use when servers return special headers or status codes to indicate certain conditions
    // that are important to the application workflow.

    public fetchByIdWithFullResponse(id: number | string, queryCriteria: IQueryCriteria[] = null): Observable<HttpResponse<E>> {
        const options = this.getOptions();
        options.observe = 'response';
        return this.httpClient.request('GET', this.getUrl(id, queryCriteria), options);
    }

    public fetchWithFullResponse(queryCriteria: IQueryCriteria[] = null): Observable<HttpResponse<E[]>> {
        const options = this.getOptions();
        options.observe = 'response';
        return this.httpClient.request('GET', this.getUrl(null, queryCriteria), options);
    }

    public save(entity: E): Observable<E> {
        return (entity && entity[this.resourceKeyId]) ? this.update(entity) : this.create(entity);
    }

    public create(entity: E): Observable<E> {
        const options = this.getOptions();
        options.body = entity;
        return this.httpClient.request('POST', this.getUrl(), options);
    }

    public update(entity: E): Observable<E> {
        const options = this.getOptions();
        options.body = entity;
        return this.httpClient.request('PUT', this.getUrl(entity[this.resourceKeyId]), options);
    }

    public modify(id: string | number, data: TPartialEntity<E>): Observable<E> {
        const options = this.getOptions();
        options.body = data;
        return this.httpClient.request('PATCH', this.getUrl(id), options);
    }

    public delete(id: number | string): Observable<E> {
        return this.httpClient.delete<E>(this.getUrl(id));
    }

    public exist(id: number | string = null): Observable<any> {
        return this.httpClient.request('HEAD', this.getUrl(id));
    }

    public getResourceUri(): string {
        return this.resourceUri;
    }

    public setOptions(options: IHttpRequestOptions): void {
        this.options = options;
    }

    public getOptions(): IHttpRequestOptions {
        const headers = (this.options && this.options.hasOwnProperty('headers')) ? this.options.headers : new HttpHeaders();
        headers.append('Content-Type', this.contentType);

        this.options.headers = headers;

        const options = this.options;
        this.options = {};

        return options;
    }

    protected getUrl(id: string | number = null, queryCriteria?: IQueryCriteria[], count = false): string {
        let params = '';

        if (queryCriteria) {
            params = this.getQueryParameters(queryCriteria);
        }

        let url = this.urlApi + '/';
        url += (count) ? this.getResourceUri() + '/count' : this.getResourceUri();
        url += params;
        return (id) ? url + '/' + id : url;
    }

    protected getQueryParameters(queryCriteria?: IQueryCriteria[]): string {
        let params = '';

        if (queryCriteria) {
            for (const criteria of queryCriteria) {
                params += criteria.getParameters() + '&';
            }
        }

        return '?' + params.slice(0, -1);
    }
}
