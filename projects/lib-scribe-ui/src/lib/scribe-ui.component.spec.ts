import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribeUiComponent } from './scribe-ui.component';

describe('ScribeUiComponent', () => {
  let component: ScribeUiComponent;
  let fixture: ComponentFixture<ScribeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScribeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScribeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
