import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Company } from '@master/core/apis/companies/company.interface';
import { Message, OnMessageReceiver } from '@scribe';
import {
    CompaniesCountSuccessMessage, CompaniesIsLoadingMessage, CompaniesLoadedSuccessMessage, CompaniesMessage, ListCompaniesService
} from './list-companies.service';

@Component({
    selector: 'sce-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit, OnDestroy, OnMessageReceiver {

    public isLoading = false;
    public countCompanies = 0;
    public companies: Company[] = [];
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
        this.messageReceiver();
        this.loadCompanies({pageIndex: 0, pageSize: 10, length: 0});
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public loadCompanies(event: PageEvent): void {
        this.listCompaniesService.getCompanies(event);
    }

    public removeCompany(id: number): void {
        this.listCompaniesService.remove(id);
    }

    public messageReceiver(): void {
        this.subscriptions.add(this.listCompaniesService.bus$.subscribe((message: Message) => {
            switch (message.type) {
                case CompaniesMessage.IS_LOADING:
                    this.isLoading = (message as CompaniesIsLoadingMessage).payload;
                    break;
                case CompaniesMessage.COUNT_SUCCESS:
                    this.countCompanies = (message as CompaniesCountSuccessMessage).payload;
                    break;
                case CompaniesMessage.COMPANIES_LOADED_SUCCESS:
                    this.companies = (message as CompaniesLoadedSuccessMessage).payload;
                    break;
                case CompaniesMessage.REMOVE_SUCCESS:
                    this.loadCompanies({pageIndex: 0, pageSize: 10, length: 0});
                    this.paginator.pageIndex = 0;
                    break;
            }
        }));
    }
}
