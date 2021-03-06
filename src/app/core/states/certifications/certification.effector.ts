import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { Certification } from '../../apis/certifications/certification.interface';
import { ApiCertificationsService } from '../../apis/certifications/api-certifications.service';
import {
    CertificationAction, CertificationActionAdd, CertificationActionDelete,
    CertificationActionLoad, CertificationActionCount,
    CertificationActionCountSuccess,
    CertificationActionLoadSuccess
} from '@master/core/states/certifications/certification.action';
import { QueryCriteria, QueryCriteriaPaginate } from '@scribe';

@Injectable()
export class CertificationEffector {

    constructor(
        private action$: Actions,
        private certificationApi: ApiCertificationsService
    ) {}

    @Effect()
    count$ = this.action$.pipe(
        ofType(CertificationAction.COUNT),
        switchMap(() => this.certificationApi.count()),
        map((count: number) => new CertificationActionCountSuccess({count}))
    );

    @Effect()
    load$ = this.action$.pipe(
        ofType(CertificationAction.LOAD),
        switchMap((action: CertificationActionLoad) => this.certificationApi.fetch(action.payload)),
        map((certifications: Certification[]) => new CertificationActionLoadSuccess(certifications))
    );

    @Effect()
    add$ = this.action$.pipe(
        ofType(CertificationAction.ADD),
        switchMap((action: CertificationActionAdd) => this.certificationApi.save(action.payload).pipe(
            switchMap(() => {
                const criteria: QueryCriteria[] = [];
                criteria.push(new QueryCriteriaPaginate( 1, 10));
                return [
                    new CertificationActionCount(),
                    new CertificationActionLoad(criteria)
                ];
            })
        ))
    );

    @Effect()
    delete$ = this.action$.pipe(
        ofType(CertificationAction.DELETE),
        switchMap((action: CertificationActionDelete) => this.certificationApi.delete(action.payload.id).pipe(
            switchMap(() => {
                    const criteria: QueryCriteria[] = [];
                    criteria.push(new QueryCriteriaPaginate( 1, 10));
                    return [
                        new CertificationActionCount(),
                        new CertificationActionLoad(criteria)
                    ];
            })
        ))
    );
}
