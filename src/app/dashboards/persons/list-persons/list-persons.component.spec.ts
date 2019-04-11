import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { QueryCriteriaPaginate } from '@library/rest-api-client';

import { CoreModule } from '@core/core.module';
import { ApiPersonsService } from '@core/apis/persons/api-persons.service';


import { ListPersonsComponent } from './list-persons.component';
import { createSpyApiPersonService, getPreparedSpyApiPersonService } from '@testutils/spies/api/cv/api-person.service.spy';

describe('ListPersonsComponent', () => {
    let component: ListPersonsComponent;
    let fixture: ComponentFixture<ListPersonsComponent>;
    let spyApiPersonService: jasmine.SpyObj<ApiPersonsService>;
    let injectRouter: Router;

    beforeEach(async(() => {
        // const ApiPersonServiceProvide = jasmine.createSpyObj('ApiPersonService', httpApiStandardMethods);

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                CoreModule,
                SharedModule,
            ],
            providers: [
                {provide: ApiPersonsService, useValue: createSpyApiPersonService()}
            ],
            declarations: [ListPersonsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListPersonsComponent);
        component = fixture.componentInstance;

        spyApiPersonService = getPreparedSpyApiPersonService(TestBed.get(ApiPersonsService));
        injectRouter = TestBed.get(Router);

        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call ApiPersonService.count() - (called once)', () => {
        expect(spyApiPersonService.count.calls.count()).toBe(1);
        expect(component.countPersons).toBe(2);
    });

    it('should call ApiPersonService.fetch() - (called once)', () => {
        expect(spyApiPersonService.fetch.calls.count()).toBe(1);
        expect(spyApiPersonService.fetch).toHaveBeenCalledWith([new QueryCriteriaPaginate(1, 10)]);
    });

    it('should call ApiPersonService.delete() && ApiPersonService.fetch()', fakeAsync(() => {
        const deleteId = 1;

        component.remove(deleteId);

        expect(spyApiPersonService.delete.calls.count()).toBe(1);
        expect(spyApiPersonService.delete).toHaveBeenCalledWith(deleteId);

        tick();
        fixture.detectChanges();

        expect(spyApiPersonService.fetch.calls.count()).toBe(2);
    }));

    it('after call add() should navigate to /persons/add', () => {
        spyOn(injectRouter, 'navigate');
        component.add();
        expect(injectRouter.navigate).toHaveBeenCalledWith(['/', 'persons', 'add']);
    });
});
