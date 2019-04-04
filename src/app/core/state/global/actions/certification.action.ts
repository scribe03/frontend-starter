import { Action } from '@ngrx/store';
import { IQueryCriteria } from '@sharedlib/rest-api-client/src/query';
import { ICertification } from '@core/api/cv/models/certification.interface';

export interface ICertificationState<T> {
    entities: T[];
    count: number;
    queryCriteria: IQueryCriteria[];
    isLoading: boolean;
}

export enum CertificationAction {
    COUNT = '[Certifications] Count',
    COUNT_SUCCESS = '[Certifications] Count success',
    ADD = '[Certifications] Add',
    LOAD = '[Certifications] Load',
    LOAD_SUCCESS = '[Certifications] Load success',
    DELETE = '[Certifications] Delete'
}

export class CertificationActionCount implements Action {
    readonly type = CertificationAction.COUNT;

    constructor(public payload: IQueryCriteria[] = []) { }
}

export class CertificationActionCountSuccess implements Action {
    readonly type = CertificationAction.COUNT_SUCCESS;

    constructor(public payload: {count: number}) { }
}

export class CertificationActionAdd implements Action {
    readonly type = CertificationAction.ADD;

    constructor(public payload: ICertification) { }
}

export class CertificationActionLoad implements Action {
    readonly type = CertificationAction.LOAD;

    constructor(public payload: IQueryCriteria[] = []) { }
}

export class CertificationActionLoadSuccess implements Action {
    readonly type = CertificationAction.LOAD_SUCCESS;

    constructor(public payload: ICertification[] = []) { }
}

export class CertificationActionDelete implements Action {
    readonly type = CertificationAction.DELETE;

    constructor(public payload: {id: number}) { }
}

export type CertificationActionTypes = CertificationActionCount
    | CertificationActionCountSuccess
    | CertificationActionAdd
    | CertificationActionLoad
    | CertificationActionLoadSuccess
    | CertificationActionDelete;
