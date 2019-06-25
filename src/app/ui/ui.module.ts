import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';
import { FormGroupComponent } from '@master/ui/form/form-group/form-group.component';
import { ValidationMessagesComponent } from '@master/ui/form/validation-messages/validation-messages.component';
import { InputDirective } from '@master/ui/directives/form/input/input.directive';

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
    InputDirective
  ],
  exports: [
    // COMPONENTS
    // FORMS
    FormGroupComponent,
    ValidationMessagesComponent,
    // ...
    MouseDownUpDirective,
    InputDirective
    // DIRECTIVES
    // PIPES
  ]
})
export class UiModule { }
