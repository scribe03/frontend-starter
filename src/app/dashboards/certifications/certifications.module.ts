import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications/certifications.component';
import { CertificationsPanelComponent } from './certifications-panel.component';
import { CertificationAddComponent } from './certification-add/certification-add.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        CertificationsRoutingModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [
        CertificationsPanelComponent, CertificationsComponent, CertificationAddComponent
    ],
    exports: [
        CertificationsPanelComponent, CertificationsComponent, CertificationAddComponent
    ]
})
export class CertificationsModule {
}
