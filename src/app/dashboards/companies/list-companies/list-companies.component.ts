import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { Company } from '@core/api/cv/models/company.interface';
import { Message, OnMessageReceiver } from '@sharedlib/message-bus';
import {
    CompaniesCountMessage, CompaniesIsLoadingMessage, CompaniesMessage, ListCompaniesService
} from './list-companies.service';

@Component({
    selector: 'fds-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit, OnDestroy, OnMessageReceiver {

    public isLoading = false;
    public countCompanies = 0;
    public companies$: Observable<Company[]>;
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
        this.companies$ = this.listCompaniesService.getStreamCompanies(event);
    }

    public remove(id: number): void {
        this.listCompaniesService.remove(id);
    }

    public messageReceiver(): void {
        this.subscriptions.add(this.listCompaniesService.bus$.subscribe((message: Message) => {
            switch (message.type) {
                case CompaniesMessage.IS_LOADING:
                    this.isLoading = (message as CompaniesIsLoadingMessage).payload;
                    break;
                case CompaniesMessage.COUNT:
                    this.countCompanies = (message as CompaniesCountMessage).payload;
                    break;
                case CompaniesMessage.REMOVE_SUCCESS:
                    this.loadCompanies({pageIndex: 0, pageSize: 10, length: 0});
                    this.paginator.pageIndex = 0;
                    break;
            }
        }));
    }
}
