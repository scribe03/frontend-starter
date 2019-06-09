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
    loadChildren: () => import('./dashboards/persons/persons.module').then(m => m.PersonsModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./dashboards/companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'certifications',
    loadChildren: () => import('./dashboards/certifications/certifications.module').then(m => m.CertificationsModule)
  },
  {
    path: 'examples',
    loadChildren: () => import('./dashboards/examples/examples.module').then(m => m.ExamplesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
