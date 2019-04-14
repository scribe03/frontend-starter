import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications/certifications.component';
import { CertificationsPanelComponent } from './certifications-panel.component';
import { CertificationAddComponent } from './certification-add/certification-add.component';
import { MaterialModule } from '../../shared/material.module';
import { SharedConceptModule } from '../../shared/shared.module';
import { UiModule } from '@master/ui/ui.module';

@NgModule({
    imports: [
        CommonModule,
        CertificationsRoutingModule,
        MaterialModule,
        UiModule,
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
