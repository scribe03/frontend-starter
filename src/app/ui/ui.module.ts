import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';
import { FormGroupComponent } from './form/form-group/form-group.component';
import { FieldDirective } from './directives/form/field/field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from './form/validation-messages/validation-messages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MouseDownUpDirective,
    FormGroupComponent,
    ValidationMessagesComponent,
    FieldDirective
  ],
  exports: [
    // COMPONENTS
    // FORMS
    FormGroupComponent,
    ValidationMessagesComponent,
    // ...
    MouseDownUpDirective,
    FieldDirective
    // DIRECTIVES
    // PIPES
  ]
})
export class UiModule { }
