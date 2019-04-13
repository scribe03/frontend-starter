import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCompaniesComponent } from './list-companies/list-companies.component';

const routes: Routes = [
  {
    path: '',
    component: ListCompaniesComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
