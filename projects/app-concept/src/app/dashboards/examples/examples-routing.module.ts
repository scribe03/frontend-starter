import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { SvgComponent } from './svg/svg.component';

const routes: Routes = [
  {
    path: '',
    component: LifecycleHooksComponent,
    pathMatch: 'full'
  },
  {
    path: 'svg',
    component: SvgComponent
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
