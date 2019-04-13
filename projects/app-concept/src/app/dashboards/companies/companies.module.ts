import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@master/shared/shared.module';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { SharedConceptModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
    declarations: [ListCompaniesComponent],
    exports: [ListCompaniesComponent],
    imports: [
        CommonModule,
        CompaniesRoutingModule,
        // others
        MaterialModule,
        SharedModule,
        SharedConceptModule
    ]
})
export class CompaniesModule {
}
