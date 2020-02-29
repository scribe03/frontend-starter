import { AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList, Renderer2, ViewChild } from '@angular/core';

import { CarouselSlideDirective } from '@master/ui/advanced-components/carousel/directives/carousel-slide.directive';
import { CarouselDirection } from '@master/ui/advanced-components/carousel/enums/carousel-direction';

@Component({
  selector: 'sc-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselSlideDirective, { descendants: true }) public carouselSlide: QueryList<CarouselSlideDirective>;

  @Input() public startFromIndex = 0;
  @Input() public itemsPerSlide = 3;

  @ViewChild('carouselInner', {static: true}) protected carouselInner: ElementRef;
  @ViewChild('carouselItems', {static: true}) protected carouselItems: ElementRef;

  private slideMaxWidth = 0;

  private direction: CarouselDirection = CarouselDirection.UNKNOWN;
  private oldRange: number[];

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit(): void {
    this.moveSliders();

    this.slideMaxWidth = Math.floor(Math.abs(this.carouselInner.nativeElement.clientWidth / this.itemsPerSlide));
    this.setWidthToEachSlider();
  }

  public slidePrevious(): void {

    if (this.direction === CarouselDirection.UNKNOWN || this.direction === CarouselDirection.NEXT) {
      this.renderer.setStyle(this.carouselItems.nativeElement, 'transform', `translateX(-${this.slideMaxWidth}px)`);
    }

    this.direction = CarouselDirection.PREV;
    this.startFromIndex -= 1;
    this.moveSliders();
  }

  public slideNext(): void {
    this.direction = CarouselDirection.NEXT;
    this.startFromIndex += 1;
    this.resetCarouselItemsLayer();
    this.moveSliders();
  }

  private transformCarouselItemsLayer(): void {
    const width: number = this.direction === CarouselDirection.NEXT ? this.slideMaxWidth : -this.slideMaxWidth;
    this.renderer.setStyle(this.carouselItems.nativeElement, 'transform', `translateX(${width}px)`);
  }

  private resetCarouselItemsLayer(): void {
    this.renderer.removeStyle(this.carouselItems.nativeElement, 'transform');
  }

  private moveSliders(): void {
    const maxIndex = (this.carouselSlide.length - 1 > 0) ? this.carouselSlide.length - 1 : 0;
    const slides: CarouselSlideDirective[] = this.carouselSlide.toArray();

    if (this.startFromIndex > maxIndex) {
      this.startFromIndex = 0;
    }

    if (this.startFromIndex < 0) {
      this.startFromIndex = this.carouselSlide.length - 1;
    }

    const range: number[] = this.completeArrayWithCalculatedValues(this.startFromIndex, this.itemsPerSlide, maxIndex);
console.log('range: ', range);
console.log('oldRange: ', this.oldRange);
    // range.forEach((value: number, index: number) => slides[value].addOrder(index));

    let methodToHide: Function;

    // OLD extreme elements (left/right) from the collection should be animated and hidden
    switch (this.direction) {
      case CarouselDirection.NEXT: // <<
        const oldLeftSlideIndexToHide: number = (range[0] === 0) ? maxIndex : range[0] - 1;
        methodToHide = () => {
          slides[oldLeftSlideIndexToHide].hide();
          this.transformCarouselItemsLayer();
        };
        slides[oldLeftSlideIndexToHide].addOrder(0).animate('xleft', methodToHide);
        break;
      case CarouselDirection.PREV: // >>
        const oldRightSlideIndexToHide: number = (range[range.length - 1] !== maxIndex)
          ? range[range.length - 1] + 1 : 0;
        methodToHide = () => {
          slides[oldRightSlideIndexToHide].hide();
          this.transformCarouselItemsLayer();
        };
        slides[oldRightSlideIndexToHide].addOrder(this.itemsPerSlide + 1).animate('xright', methodToHide);
        break;
    }

    // new elements from the collection should be animated and showed
    if ([CarouselDirection.NEXT, CarouselDirection.PREV].includes(this.direction)) {
      range.forEach((value: number, index: number) => slides[value]
        .addOrder(index + 1)
        .animate(this.direction === CarouselDirection.NEXT ? 'xleft' : 'xright', null)
        .show()
      );
    } else {
      range.forEach((value: number) => slides[value].animate('left', null).show());
    }

    this.oldRange = range;
  }

  private setWidthToEachSlider(): void {
    this.carouselSlide.forEach((slide: CarouselSlideDirective) => slide.setWidth(this.slideMaxWidth));
  }

  /**
   * @todo: add description ...
   completeArrayWithCalculatedValues(0, 3, 9)
                                  >>
   [0, 1, 2], 3, 4, 5, 6, 7, 8, 9
   [1, 2, 3], 4, 5, 6, 7, 8, 9, 0
   [2, 3, 4], 5, 6, 7, 8, 9, 0, 1
   [3, 4, 5], 6, 7, 8, 9, 0, 1, 2
   [4, 5, 6], 7, 8, 9, 0, 1, 2, 3
   [5, 6, 7], 8, 9, 0, 1, 2, 3, 4
   [6, 7, 8], 9, 0, 1, 2, 3, 4, 5
   [7, 8, 9], 0, 1, 2, 3, 4, 5, 6
   [8, 9, 0], 1, 2, 3, 4, 5, 6, 7
   [9, 0, 1], 2, 3, 4, 5, 6, 7, 8
   [0, 1, 2], 3, 4, 5, 6, 7, 8, 9
<<
   completeArrayWithCalculatedValues(9, 3, 9)
   */
  public completeArrayWithCalculatedValues(startFromIndex: number, range: number, maxIndex: number): number[] {
    const indexRange: number[] = [];
    let newIndex = 0;

    let counter = 0;
    while (counter < range) {
      if (startFromIndex <= maxIndex) {
        indexRange[counter] = startFromIndex;
        startFromIndex++;
      } else {
        indexRange[counter] = newIndex;
        newIndex++;
      }
      counter++;
    }

    return indexRange;
  }
}
