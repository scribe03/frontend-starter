import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@master/shared/shared.module';
import { CoreModule } from '@master/core/core.module';
import { certificationReducer } from '@master/core/states/certifications/certification.reducer';
import { CertificationEffector } from '@master/core/states/certifications/certification.effector';
import { SharedConceptModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      certifications: certificationReducer
    }),
    EffectsModule.forRoot([CertificationEffector]),
    // others
    MaterialModule,
    CoreModule,
    SharedModule,
    SharedConceptModule,
    // ...
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
