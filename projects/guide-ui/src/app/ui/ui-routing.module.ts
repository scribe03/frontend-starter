import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalsComponent } from './windows/modals/modals.component';

const routes: Routes = [
  {
    path: '',
    component: ModalsComponent,
    pathMatch: 'full'
  },
  {
    path: 'modals',
    component: ModalsComponent,
    pathMatch: 'full'
  },
  {
    path: 'advanced-components',
    loadChildren: () => import('./advanced-components/advanced-components.module').then(m => m.AdvancedComponentsModule)
  },
  {
    path: '**',
    component: ModalsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
