import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleInteractiveComponent } from './rectangle-interactive.component';
import { MouseDownUpDirective } from '@master/shared/directives/mouse-down-up/mouse-down-up.directive';

describe('RectangleInteractiveComponent', () => {
  let component: RectangleInteractiveComponent;
  let fixture: ComponentFixture<RectangleInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          MouseDownUpDirective,
          RectangleInteractiveComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
