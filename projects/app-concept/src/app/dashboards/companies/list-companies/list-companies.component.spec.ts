import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListCompaniesComponent } from './list-companies.component';
import { CoreModule } from '@master/core/core.module';
import { SharedModule } from '@master/shared/shared.module';
import { ListCompaniesService } from './list-companies.service';
import { MaterialModule } from '../../../shared/material.module';
import { SharedConceptModule } from '../../../shared/shared.module';

describe('ListCompaniesComponent', () => {
  let component: ListCompaniesComponent;
  let fixture: ComponentFixture<ListCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule,
        CoreModule,
        SharedModule,
        SharedConceptModule
      ],
      providers: [
        ListCompaniesService // add stub !!!
      ],
      declarations: [ ListCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
