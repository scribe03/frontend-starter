import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedComponentsRoutingModule } from './advanced-components-routing.module';
import { CarouselSimpleComponent } from './carousel/carousel-simple/carousel-simple.component';

import { CarouselModule } from '@master/ui/advanced-components/carousel/carousel.module';
import { CarouselTextItemComponent } from './carousel/items/carousel-text-item/carousel-text-item.component';

@NgModule({
  declarations: [CarouselSimpleComponent, CarouselTextItemComponent],
  imports: [
    CommonModule,
    AdvancedComponentsRoutingModule,
    CarouselModule
  ]
})
export class AdvancedComponentsModule { }
