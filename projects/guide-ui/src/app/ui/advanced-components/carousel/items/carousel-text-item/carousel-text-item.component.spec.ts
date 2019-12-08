import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTextItemComponent } from './carousel-text-item.component';

describe('CarouselTextItemComponent', () => {
  let component: CarouselTextItemComponent;
  let fixture: ComponentFixture<CarouselTextItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTextItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTextItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
