import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';

import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './list-companies/list-companies.component';

@NgModule({
    declarations: [ListCompaniesComponent],
    exports: [ListCompaniesComponent],
    imports: [
        CommonModule,
        CompaniesRoutingModule,
        // others
        MaterialModule,
        SharedModule,
    ]
})
export class CompaniesModule {
}
