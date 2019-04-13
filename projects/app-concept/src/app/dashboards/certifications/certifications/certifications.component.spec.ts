import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsComponent } from './certifications.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@master/core/core.module';
import { SharedModule } from '@master/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { certificationReducer } from '@master/core/states/certifications/certification.reducer';
import { MaterialModule } from '../../../shared/material.module';

describe('CertificationsComponent', () => {
    let component: CertificationsComponent;
    let fixture: ComponentFixture<CertificationsComponent>;

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
            declarations: [CertificationsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CertificationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
