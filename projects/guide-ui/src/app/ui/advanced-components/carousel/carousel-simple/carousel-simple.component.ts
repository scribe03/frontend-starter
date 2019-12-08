import { Component, OnInit } from '@angular/core';
import { exampleCarouselItems } from '../models/example-carousel-items';

@Component({
  selector: 'app-carousel-simple',
  templateUrl: './carousel-simple.component.html',
  styleUrls: ['./carousel-simple.component.scss']
})
export class CarouselSimpleComponent implements OnInit {
  public items: any = exampleCarouselItems;
  constructor() { }

  ngOnInit() {
  }

}
