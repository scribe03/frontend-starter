import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputTextComponent } from './input-text/input-text.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    component: InputTextComponent,
    pathMatch: 'full'
  },
  {
    path: 'input-text',
    component: InputTextComponent,
    pathMatch: 'full'
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: '**',
    component: InputTextComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
