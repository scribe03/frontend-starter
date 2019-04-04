import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'persons',
        pathMatch: 'full'
    },
    {
        path: 'persons',
        loadChildren: './dashboards/persons/persons.module#PersonsModule'
    },
    {
        path: 'companies',
        loadChildren: './dashboards/companies/companies.module#CompaniesModule'
    },
    {
        path: 'certifications',
        loadChildren: './dashboards/certifications/certifications.module#CertificationsModule'
    },
    {
        path: 'examples',
        loadChildren: './dashboards/examples/examples.module#ExamplesModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
