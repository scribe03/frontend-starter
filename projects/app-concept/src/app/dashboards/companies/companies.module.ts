import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { SharedConceptModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { UiModule } from '@master/ui/ui.module';

@NgModule({
    declarations: [ListCompaniesComponent],
    exports: [ListCompaniesComponent],
    imports: [
        CommonModule,
        CompaniesRoutingModule,
        // others
        MaterialModule,
        UiModule,
        SharedConceptModule
    ]
})
export class CompaniesModule {
}
