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

  @ViewChild('carouselWrapper', {static: true}) protected carouselWrapper: ElementRef;
  @ViewChild('carouselField', {static: true}) protected carouselField: ElementRef;

  private slideMaxWidth = 0;

  private direction: CarouselDirection = CarouselDirection.UNKNOWN;
  private oldRange: number[];

  constructor(private renderer: Renderer2) { }

  // @todo: ngOnInit
  // 1. change screen size ... moveSliders()
  // 2. min width ... set itemsPerSlide = 1

  ngAfterContentInit(): void {
    this.moveSliders();

    this.slideMaxWidth = Math.floor(Math.abs(this.carouselWrapper.nativeElement.clientWidth / this.itemsPerSlide));
    this.setWidthToEachSlider();
  }

  public slidePrevious(): void {

    if (this.direction === CarouselDirection.UNKNOWN || this.direction === CarouselDirection.NEXT) {
      this.renderer.setStyle(this.carouselField.nativeElement, 'transform', `translateX(-${this.slideMaxWidth}px)`);
    }

    this.direction = CarouselDirection.PREV;
    this.startFromIndex -= 1;
    this.moveSliders();
  }

  public slideNext(): void {
    this.direction = CarouselDirection.NEXT;
    this.startFromIndex += 1;
    this.resetCarouselFieldLayer();
    this.moveSliders();
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

    this.moveOldExtremeSlider(maxIndex, slides, range);

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

  private moveOldExtremeSlider(maxIndex: number, slides: CarouselSlideDirective[], range: number[]): void {
    let methodToHide: Function;

    // OLD extreme elements (left/right) from the collection should be animated and hidden
    switch (this.direction) {
      case CarouselDirection.NEXT: // <<
        const oldLeftSlideIndexToHide: number = (range[0] === 0) ? maxIndex : range[0] - 1;
        methodToHide = () => {
          slides[oldLeftSlideIndexToHide].hide();
          this.transformCarouselFieldLayer();
        };
        slides[oldLeftSlideIndexToHide].addOrder(0).animate('xleft', methodToHide);
        break;
      case CarouselDirection.PREV: // >>
        const oldRightSlideIndexToHide: number = (range[range.length - 1] !== maxIndex)
          ? range[range.length - 1] + 1 : 0;
        methodToHide = () => {
          slides[oldRightSlideIndexToHide].hide();
          this.transformCarouselFieldLayer();
        };
        slides[oldRightSlideIndexToHide].addOrder(this.itemsPerSlide + 1).animate('xright', methodToHide);
        break;
    }
  }

  private transformCarouselFieldLayer(): void {
    const width: number = this.direction === CarouselDirection.NEXT ? this.slideMaxWidth : -this.slideMaxWidth;
    this.renderer.setStyle(this.carouselField.nativeElement, 'transform', `translateX(${width}px)`);
  }

  private resetCarouselFieldLayer(): void {
    this.renderer.removeStyle(this.carouselField.nativeElement, 'transform');
  }

  private setWidthToEachSlider(): void {
    this.carouselSlide.forEach((slide: CarouselSlideDirective) => slide.setWidth(this.slideMaxWidth));
  }

  /**
   * @todo: add description ... change name ...
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
