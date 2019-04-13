import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { CertificationAddComponent } from './certification-add.component';
import { certificationReducer } from '@master/core/states/certifications/certification.reducer';
import { CoreModule } from '@master/core/core.module';
import { SharedModule } from '@master/shared/shared.module';
import { SharedConceptModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';

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
                SharedConceptModule,
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
