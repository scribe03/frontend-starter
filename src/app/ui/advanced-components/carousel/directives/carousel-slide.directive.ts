import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, style, animate } from '@angular/animations';
import { CarouselAnimationType } from '@master/ui/advanced-components/carousel/enums/carousel-animation-type';

@Directive({
  selector: '[scCarouselSlide]'
})
export class CarouselSlideDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private builder: AnimationBuilder
  ) { }

  public ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'sc-slide');
  }

  public addOrder(order: number): this {
    this.renderer.setStyle(this.elementRef.nativeElement, 'order', order);
    return this;
  }

  public hide(): void {
    this.renderer.removeClass(this.elementRef.nativeElement, 'active');
  }

  public show(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'active');
  }

  public setWidth(width: number): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', width + 'px');
  }

  public animate(type: CarouselAnimationType, methodToHide: Function): this {
    let metadata: AnimationMetadata[];
    switch (type) {
      case CarouselAnimationType.LEFT_FROM_100_TO_0:
        metadata = this.positionItemOnTheRightBeforeScrollingLeft();
        break;
      case CarouselAnimationType.LEFT_FROM_0_TO_M100:
        metadata = this.scrollingLeft();
        break;
      case CarouselAnimationType.RIGHT_FROM_M100_TO_0:
        metadata = this.positionItemOnTheLeftBeforeScrollingRight();
        break;
      case CarouselAnimationType.RIGHT_FROM_0_TO_100:
        metadata = this.scrollingRight();
        break;
    }

    const factory = this.builder.build(metadata);
    const player = factory.create(this.elementRef.nativeElement);

    if (methodToHide) {
      player.onDone(() => methodToHide());
    }

    player.play();
    return this;
  }

  private positionItemOnTheRightBeforeScrollingLeft(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(100%)' }),
      animate('250ms ease-in', style({ transform: 'translateX(0%)' })),
    ];
  }

  private scrollingLeft(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(0%)' }),
      animate('250ms ease-in', style({ transform: 'translateX(-100%)' })),
    ];
  }

  private positionItemOnTheLeftBeforeScrollingRight(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(-100%)' }),
      animate('250ms ease-in', style({ transform: 'translateX(0%)' })),
    ];
  }

  private scrollingRight(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(0%)' }),
      animate('250ms ease-in', style({ transform: 'translateX(100%)' })),
    ];
  }
}
