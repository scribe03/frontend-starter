import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ApiCompaniesService } from '@core/api/cv/services/api-companies.service';
import { LocalState } from '@core/state/local/local-state';
import { IQueryCriteria, QueryCriteriaPaginate } from '@sharedlib/rest-api-client';
import { PageEvent } from '@angular/material';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICompany } from '@core/api/cv/models/company.interface';

export enum CompaniesAction {
    LOADING = '[Companies] Loading',
    COUNT = '[Companies] Count',
    REMOVE = '[Companies] Remove',
}

export class CompaniesActionLoading implements Action {
    readonly type = CompaniesAction.LOADING;

    constructor(public payload: boolean) {
    }
}

export class CompaniesActionCount implements Action {
    readonly type = CompaniesAction.COUNT;

    constructor(public payload: number) {
    }
}

export class CompaniesActionRemove implements Action {
    readonly type = CompaniesAction.REMOVE;
}

@Injectable({
    providedIn: 'root'
})
export class ListCompaniesService extends LocalState {

    constructor(private apiCompanies: ApiCompaniesService) {
        super();
    }

    public getCompanies(event: PageEvent): Observable<ICompany[]> {
        this.dispatch(new CompaniesActionLoading(true));

        const criteria: IQueryCriteria[] = [];
        criteria.push(new QueryCriteriaPaginate(event.pageIndex + 1, event.pageSize));

        return this.apiCompanies.count().pipe(
            map(countPersons => this.dispatch(new CompaniesActionCount(countPersons))),
            switchMap(() => this.apiCompanies.fetch(criteria)),
            tap(() => this.dispatch(new CompaniesActionLoading(false)))
        );
    }

    public remove(id: number): void {
        this.apiCompanies.delete(id).subscribe(() => this.dispatch(new CompaniesActionRemove()));
    }
}
