import { fakeAsync } from '@angular/core/testing';

import { of } from 'rxjs';

import { ApiPersonsService } from '@core/apis/persons/api-persons.service';
import { mockPerson } from '@testutils/mocks/persons.mock';

describe('ApiPersonsService', () => {

    let httpClientSpy: { request: jasmine.Spy, delete: jasmine.Spy  };
    let apiPersonService: ApiPersonsService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['request', 'delete']);
        apiPersonService = new ApiPersonsService(<any> httpClientSpy);
    });

    it('method fetch() should return data', fakeAsync(() => {
        const testData = mockPerson();
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.fetch().subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method fetchById() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.fetchById(1).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method count() should return data', fakeAsync(() => {
        const testData = mockPerson().length;
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.count().subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method save() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.save(testData).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method create() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.create(testData).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method update() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.update(testData).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method modify() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.request.and.returnValue(of(testData));


        apiPersonService.modify(1, {}).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));

    it('method delete() should return data', fakeAsync(() => {
        const testData = mockPerson()[0];
        httpClientSpy.delete.and.returnValue(of(testData));


        apiPersonService.delete(1).subscribe((data) => {
            expect(data).toEqual(testData);
        });
    }));
});
