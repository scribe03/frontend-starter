import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { CertificationAddComponent } from './certification-add.component';
import { certificationReducer } from '@core/state/certifications/certification.reducer';
import { CoreModule } from '@core/core.module';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';

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
