import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsPersonComponent } from './emails-person.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

describe('EmailsPersonComponent', () => {
  let component: EmailsPersonComponent;
  let fixture: ComponentFixture<EmailsPersonComponent>;

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
      ],
      declarations: [
          EmailsPersonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
