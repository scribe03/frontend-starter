import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificationsPanelComponent } from './certifications-panel.component';

const routes: Routes = [
  {
    path: '',
    component: CertificationsPanelComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: CertificationsPanelComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsRoutingModule { }
