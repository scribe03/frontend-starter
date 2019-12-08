import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselSimpleComponent } from './carousel/carousel-simple/carousel-simple.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselSimpleComponent,
    pathMatch: 'full'
  },
  {
    path: 'carousel',
    component: CarouselSimpleComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: CarouselSimpleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedComponentsRoutingModule { }
