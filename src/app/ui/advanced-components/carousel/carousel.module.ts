import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from '@master/ui/advanced-components/carousel/carousel/carousel.component';
import { CarouselSlideDirective } from '@master/ui/advanced-components/carousel/directives/carousel-slide.directive';

@NgModule({
  declarations: [CarouselComponent, CarouselSlideDirective],
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent, CarouselSlideDirective],
})
export class CarouselModule { }
