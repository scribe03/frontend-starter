import { fakeAsync } from '@angular/core/testing';

import { of } from 'rxjs';

import { ApiPersonService } from './api-person.service';
import { mockPerson } from '@testutils/mocks/persons.mock';

describe('ApiPersonService', () => {

    let httpClientSpy: { request: jasmine.Spy, delete: jasmine.Spy  };
    let ApiPersonService: ApiPersonService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['request', 'delete']);
        ApiPersonService = new ApiPersonService(<any> httpClientSpy);
    });

    it('method fetch() should return data', fakeAsync(() => {
        const testData = mockPerson();
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.fetch().subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method fetchById() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.fetchById(1).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method count() should return data', fakeAsync(() => {
        const testData = mockPerson().length;
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.count().subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method save() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.save(testData).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method create() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.create(testData).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method update() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.update(testData).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method modify() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        ApiPersonService.modify(1, {}).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method delete() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.delete.and.returnValue(of(testData));


        ApiPersonService.delete(1).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));
});
