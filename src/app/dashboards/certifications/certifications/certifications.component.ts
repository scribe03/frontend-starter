import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Certification } from '@core/api/certifications/certification.interface';
import { IAppState } from '@core/state/app.state';
import {
    CertificationActionDelete,
    CertificationActionLoad, CertificationActionCount,
} from '@core/state/certifications/certification.action';
import {
    getCertificationsCount,
    getCertificationsEntities,
    getCertificationsIsLoading
} from '@core/state/certifications/certification.selector';

import { QueryCriteria, QueryCriteriaPaginate } from '@sharedlib/rest-api-client/src/query';

@Component({
    selector: 'fds-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
    public displayedColumns: string[] = ['id', 'name', 'remove'];

    public certifications$: Observable<Certification[]>;
    public isLoading$: Observable<boolean>;
    public count$: Observable<number>;

    // https://github.com/angular/material2/issues/5812
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private store: Store<IAppState>) {
    }

    public ngOnInit() {
        this.count$ = this.store.select(getCertificationsCount);
        this.certifications$ = this.store.select(getCertificationsEntities);
        this.isLoading$ = this.store.select(getCertificationsIsLoading);

        this.loadCertificationsCount();
        this.loadCertifications({pageIndex: 0, pageSize: 10, length: 0});
    }

    public remove(id: number): void {
        this.store.dispatch(new CertificationActionDelete({id: id}));
        this.resetPaginatorPageIndex();
    }

    public loadCertificationsCount(): void {
        this.store.dispatch(new CertificationActionCount());
    }

    public loadCertifications(event: PageEvent): void {
        const criteria: QueryCriteria[] = [];
        criteria.push(new QueryCriteriaPaginate(event.pageIndex + 1, event.pageSize));

        this.store.dispatch(new CertificationActionLoad(criteria));
    }

    public resetPaginatorPageIndex(): void {
        this.paginator.pageIndex = 0;
    }
}
