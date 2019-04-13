import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonComponent } from './edit-person.component';
import { SharedModule } from '@master/shared/shared.module';
import { CoreModule } from '@master/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedConceptModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../shared/material.module';

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CoreModule,
        SharedModule,
        SharedConceptModule
      ],
      declarations: [
          EditPersonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
