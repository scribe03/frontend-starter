import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationAddComponent } from './certification-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';
import { certificationReducer, initialCertificationState } from '@core/state/global/reducers/certification.reducer';
import { StoreModule } from '@ngrx/store';

describe('CertificationAddComponent', () => {
    let component: CertificationAddComponent;
    let fixture: ComponentFixture<CertificationAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                CoreModule,
                SharedModule,
                StoreModule.forRoot({
                    certifications: certificationReducer
                }),
            ],
            declarations: [CertificationAddComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CertificationAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
