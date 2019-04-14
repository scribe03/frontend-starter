import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormActionComponent } from './basic-form-action.component';

describe('BasicFormActionComponent', () => {
  let component: BasicFormActionComponent;
  let fixture: ComponentFixture<BasicFormActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
