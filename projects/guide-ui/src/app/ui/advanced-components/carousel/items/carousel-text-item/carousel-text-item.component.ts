import { Component, Input, OnInit } from '@angular/core';
import { IExampleCarouselItem } from '../../models/example-carousel-items';

@Component({
  selector: 'app-carousel-text-item',
  templateUrl: './carousel-text-item.component.html',
  styleUrls: ['./carousel-text-item.component.scss']
})
export class CarouselTextItemComponent implements OnInit {
  @Input() item: IExampleCarouselItem;

  constructor() { }

  ngOnInit() {
  }

}
