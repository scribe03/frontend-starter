import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibScribeUiComponent } from './lib-scribe-ui.component';

describe('LibScribeUiComponent', () => {
  let component: LibScribeUiComponent;
  let fixture: ComponentFixture<LibScribeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibScribeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibScribeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
