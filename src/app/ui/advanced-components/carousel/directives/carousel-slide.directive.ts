import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scCarouselSlide]'
})
export class CarouselSlideDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  public ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'sc-slide');
  }

  public addOrder(order: number): this {
    this.renderer.setStyle(this.elementRef.nativeElement, 'order', order);
    return this;
  }

  public display(display: boolean = true): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'display', display ? 'block' : 'none');
    display
      ? this.renderer.addClass(this.elementRef.nativeElement, 'active')
      : this.renderer.removeClass(this.elementRef.nativeElement, 'active');
  }
}
