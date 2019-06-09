import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpRequestOptions {
    body?: any;
    headers?: HttpHeaders;
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
}
