import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFormButtonsComponent } from './bar-form-buttons.component';

describe('BarFormButtonsComponent', () => {
  let component: BarFormButtonsComponent;
  let fixture: ComponentFixture<BarFormButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarFormButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFormButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
