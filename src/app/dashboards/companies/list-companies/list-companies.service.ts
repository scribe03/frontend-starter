import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { ApiCompaniesService } from '@core/api/cv/services/api-companies.service';
import { Company } from '@core/api/cv/models/company.interface';
import { QueryCriteria, QueryCriteriaPaginate } from '@sharedlib/rest-api-client';
import { Message, MessageBusService } from '@sharedlib/message-bus';

// --- Type message

export enum CompaniesMessage {
    IS_LOADING = '[Companies] Loading',
    COMPANIES_LOADING_SUCCESS = '[Companies] Get data success',
    COUNT = '[Companies] Count',
    REMOVE_SUCCESS = '[Companies] Remove success',
}

// --- Class message

export class CompaniesIsLoadingMessage implements Message {
    readonly type = CompaniesMessage.IS_LOADING;

    constructor(public payload: boolean) {
    }
}

export class CompaniesLoadingSuccessMessage implements Message {
    readonly type = CompaniesMessage.COMPANIES_LOADING_SUCCESS;

    constructor(public payload: Company[]) {
    }
}

export class CompaniesCountMessage implements Message {
    readonly type = CompaniesMessage.COUNT;

    constructor(public payload: number) {
    }
}

export class CompaniesRemoveSuccessMessage implements Message {
    readonly type = CompaniesMessage.REMOVE_SUCCESS;
}

// --- Service

@Injectable({
    providedIn: 'root'
})
export class ListCompaniesService extends MessageBusService {

    constructor(private apiCompanies: ApiCompaniesService) {
        super();
    }

    public getCompaniesAsStream(event: PageEvent): Observable<Company[]> {
        this.send(new CompaniesIsLoadingMessage(true));

        const criteria: QueryCriteria[] = [];
        criteria.push(new QueryCriteriaPaginate(event.pageIndex + 1, event.pageSize));

        return this.apiCompanies.count().pipe(
            map(count => this.send(new CompaniesCountMessage(count))),
            switchMap(() => this.apiCompanies.fetch(criteria)),
            tap(() => this.send(new CompaniesIsLoadingMessage(false)))
        );
    }

    public getCompanies(event: PageEvent): void {
        this.getCompaniesAsStream(event).subscribe((companies) => this.send(new CompaniesLoadingSuccessMessage(companies)));
    }

    public remove(id: number): void {
        this.send(new CompaniesIsLoadingMessage(true));

        this.apiCompanies.delete(id).pipe(
            tap(() => this.send(new CompaniesIsLoadingMessage(false)))
        ).subscribe(() => this.send(new CompaniesRemoveSuccessMessage()));
    }
}
