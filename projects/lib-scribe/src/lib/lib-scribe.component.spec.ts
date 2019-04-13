import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibScribeComponent } from './lib-scribe.component';

describe('LibScribeComponent', () => {
  let component: LibScribeComponent;
  let fixture: ComponentFixture<LibScribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibScribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibScribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
