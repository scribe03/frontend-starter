import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { Action } from '@ngrx/store';

import { ICompany } from '@core/api/cv/models/company.interface';
import { CompaniesAction, CompaniesActionCount, CompaniesActionLoading, ListCompaniesService } from './list-companies.service';

@Component({
    selector: 'fds-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit, OnDestroy {

    public isLoading = false;
    public countCompanies = 0;
    public companies$: Observable<ICompany[]>;
    public displayedColumns: string[] = ['id', 'name', 'city', 'zipCode', 'streetName', 'remove'];
    // https://github.com/angular/material2/issues/5812
    @ViewChild(MatPaginator) paginator: MatPaginator;

    private subscriptions = new Subscription();

    constructor(
        private router: Router,
        private listCompaniesService: ListCompaniesService
    ) {
    }

    ngOnInit() {
        this.localReducer();
        this.loadCompanies({pageIndex: 0, pageSize: 10, length: 0});
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public loadCompanies(event: PageEvent): void {
        this.companies$ = this.listCompaniesService.getCompanies(event);
    }

    public remove(id: number): void {
        this.listCompaniesService.remove(id);
    }

    localReducer(): void {
        this.subscriptions.add(this.listCompaniesService.store$.subscribe((action: Action) => {
            switch (action.type) {
                case CompaniesAction.LOADING:
                    this.isLoading = (action as CompaniesActionLoading).payload;
                    break;
                case CompaniesAction.COUNT:
                    this.countCompanies = (action as CompaniesActionCount).payload;
                    break;
                case CompaniesAction.REMOVE:
                    this.loadCompanies({pageIndex: 0, pageSize: 10, length: 0});
                    this.paginator.pageIndex = 0;
                    break;
            }
        }));
    }
}
