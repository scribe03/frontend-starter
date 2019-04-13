import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications/certifications.component';
import { CertificationsPanelComponent } from './certifications-panel.component';
import { CertificationAddComponent } from './certification-add/certification-add.component';
import { SharedModule } from '@master/shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { SharedConceptModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CertificationsRoutingModule,
        MaterialModule,
        SharedModule,
        SharedConceptModule
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
