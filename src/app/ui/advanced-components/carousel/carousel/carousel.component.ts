import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';

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
  private direction: CarouselDirection = CarouselDirection.UNKNOWN;
  private oldRange: number[];

  constructor() { }

  ngAfterContentInit(): void {
    this.moveSliders();
  }

  public slidePrevious(): void {
    this.direction = CarouselDirection.PREV;
    this.startFromIndex -= 1;
    this.moveSliders();
  }

  public slideNext(): void {
    this.direction = CarouselDirection.NEXT;
    this.startFromIndex += 1;
    this.moveSliders();
  }

  private hideIndicatedSlide(slide: CarouselSlideDirective): void {
    slide.hide();
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
    this.oldRange = range;

    range.forEach((value: number, index: number) => slides[value].addOrder(index));

    if ([CarouselDirection.NEXT, CarouselDirection.PREV].includes(this.direction)) {
      range.forEach((value: number, index: number) => slides[value]
        .addOrder(index)
        .animate(this.direction === CarouselDirection.NEXT ? 'xleft' : 'right', null)
        .show()
      );
    }

    let methodToHide: Function;

    switch (this.direction) {
      case CarouselDirection.NEXT: // >>
        const leftSlideIndexToHide: number = (range[0] === 0) ? maxIndex : range[0] - 1;
        methodToHide = () => slides[leftSlideIndexToHide].hide();
        const rightSlideIndexToShow: number = range[range.length - 1];

        slides[leftSlideIndexToHide].animate('xleft', methodToHide);
        // slides[leftSlideIndexToHide].hide();
        // slides[rightSlideIndexToShow].animate('left', null).show();
        break;
      case CarouselDirection.PREV: // <<
        const rightSlideIndexToHide: number = (range[range.length - 1] !== maxIndex)
          ? range[range.length - 1] + 1 : 0;
        methodToHide = () => slides[rightSlideIndexToHide].hide();
        const leftSlideIndexToShow: number = range[0];

        slides[rightSlideIndexToHide].animate('xright', methodToHide);
        // slides[rightSlideIndexToHide].hide();
        // slides[leftSlideIndexToShow].animate('right', null).show();
        break;
      default:
        range.forEach((value: number) => slides[value].animate('left', null).show());
        break;
    }
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
