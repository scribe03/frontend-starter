import { RestApiClientService } from './../rest-api-client.service';

// Use when either method are not supported on backend site

export function exceptionErrorMessage( methodName: string, message: string): Function {
    return function (target: Function) {
        if (target.prototype instanceof RestApiClientService) {
            target.prototype[methodName] = () => {
                throw Error(message);
            };
        }
    };
}

export function FetchByIdNotSupport() {
    return exceptionErrorMessage('fetchById', '(GET), fetchById: Backend does not support retrieving the resource using id !');
}

export function FetchNotSupport() {
    return exceptionErrorMessage('fetch', '(GET), fetch: Backend does not allow you to download a data collection !');
}

export function FetchByIdWithFullResponseNotSupport() {
    return exceptionErrorMessage(
        'fetchByIdWithFullResponse',
        '(GET), fetchByIdWithFullResponse: Backend does not support retrieving the resource using id !');
}

export function FetchWithFullResponseNotSupport() {
    return exceptionErrorMessage(
        'fetchWithFullResponse',
        '(GET), fetchWithFullResponse: Backend does not allow you to download a data collection !');
}

export function SaveNotSupport() {
    return exceptionErrorMessage('save', '(POST/PUT), save: Backend does not allow save data !');
}

export function CreateNotSupport() {
    return exceptionErrorMessage('create', '(POST), create: Backend does not allow save data !');
}

export function UpdateNotSupport() {
    return exceptionErrorMessage('update', '(PUT), update: Backend does not allow update data !');
}

export function ModifyNotSupport() {
    return exceptionErrorMessage('modify', '(PATCH), modify: Backend does not allow update part of data !');
}

export function DeleteNotSupport() {
    return exceptionErrorMessage('delete', '(DELETE), delete: Backend does not allow delete data !');
}

export function ExistNotSupport() {
    return exceptionErrorMessage('exist', '(HEAD) exist, Backend does not allow checking the existence of data');
}

// Backend does not support the method
