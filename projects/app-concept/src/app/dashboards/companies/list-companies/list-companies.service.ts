import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { ApiCompaniesService } from '@master/core/apis/companies/api-companies.service';
import { Company } from '@master/core/apis/companies/company.interface';
import { QueryCriteria, QueryCriteriaPaginate } from '@scribe';
import { Message, MessageBusService } from '@scribe';

// --- Type message

export enum CompaniesMessage {
    IS_LOADING = '[Companies] Loading',
    COMPANIES_LOADED_SUCCESS = '[Companies] Get data success',
    COUNT_SUCCESS = '[Companies] Count',
    REMOVE_SUCCESS = '[Companies] Remove success',
}

// --- Class message

export class CompaniesIsLoadingMessage implements Message {
    readonly type = CompaniesMessage.IS_LOADING;

    constructor(public payload: boolean) {
    }
}

export class CompaniesLoadedSuccessMessage implements Message {
    readonly type = CompaniesMessage.COMPANIES_LOADED_SUCCESS;

    constructor(public payload: Company[]) {
    }
}

export class CompaniesCountSuccessMessage implements Message {
    readonly type = CompaniesMessage.COUNT_SUCCESS;

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
        this.publish(new CompaniesIsLoadingMessage(true));

        const criteria: QueryCriteria[] = [];
        criteria.push(new QueryCriteriaPaginate(event.pageIndex + 1, event.pageSize));

        return this.apiCompanies.count().pipe(
            map(count => this.publish(new CompaniesCountSuccessMessage(count))),
            switchMap(() => this.apiCompanies.fetch(criteria)),
            tap(() => this.publish(new CompaniesIsLoadingMessage(false)))
        );
    }

    public getCompanies(event: PageEvent): void {
        this.getCompaniesAsStream(event).subscribe((companies) => this.publish(new CompaniesLoadedSuccessMessage(companies)));
    }

    public remove(id: number): void {
        this.publish(new CompaniesIsLoadingMessage(true));

        this.apiCompanies.delete(id).pipe(
            tap(() => this.publish(new CompaniesIsLoadingMessage(false)))
        ).subscribe(() => this.publish(new CompaniesRemoveSuccessMessage()));
    }
}
