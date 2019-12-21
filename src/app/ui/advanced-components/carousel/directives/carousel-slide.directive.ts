import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, style, animate } from '@angular/animations';

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

  public animate(type: string, methodToHide: Function): this {
    let metadata: AnimationMetadata[];

    switch (type) {
      case 'left':
        metadata = this.left();
        break;
      case 'right':
        metadata = this.right();
        break;
      case 'xleft':
        metadata = this.xleft();
        break;
      case 'xright':
        metadata = this.xright();
        break;
    }

    const factory = this.builder.build(metadata);
    const player = factory.create(this.elementRef.nativeElement);

    if (methodToHide) {
      player.onDone(() => {
        console.log('methodToHide');
        methodToHide();
      });
    }
    player.play();
    return this;
  }

  private right(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(-100%)' }),
      animate('400ms ease-in', style({ transform: 'translateX(0%)' })),
    ];
  }

  private left(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(100%)' }),
      animate('400ms ease-in', style({ transform: 'translateX(0%)' })),
    ];
  }

  private xright(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(0%)' }),
      animate('400ms ease-in', style({ transform: 'translateX(100%)' })),
    ];
  }

  private xleft(): AnimationMetadata[] {
    return [
      style({ transform: 'translateX(0%)' }),
      animate('400ms ease-in', style({ transform: 'translateX(-100%)' })),
    ];
  }
}
