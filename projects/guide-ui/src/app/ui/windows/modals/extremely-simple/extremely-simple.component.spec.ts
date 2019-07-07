import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremelySimpleComponent } from './extremely-simple.component';

describe('ExtremelySimpleComponent', () => {
  let component: ExtremelySimpleComponent;
  let fixture: ComponentFixture<ExtremelySimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremelySimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremelySimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
