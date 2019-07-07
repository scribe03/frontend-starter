import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';
import { InputGroupComponent } from '@master/ui/form/input-group/input-group.component';
import { ValidationMessagesComponent } from '@master/ui/form/validation-messages/validation-messages.component';
import { InputDirective } from '@master/ui/directives/form/input/input.directive';
import { ModalComponent } from './windows/modal/modal.component';
import { BaseModalComponent } from './windows/modal/base-modal/base-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MouseDownUpDirective,
    InputGroupComponent,
    ValidationMessagesComponent,
    InputDirective,
    ModalComponent
  ],
  exports: [
    // COMPONENTS
    // FORMS
    InputGroupComponent,
    ValidationMessagesComponent,
    // MODALS
    ModalComponent,
    // ...
    MouseDownUpDirective,
    InputDirective
    // DIRECTIVES
    // PIPES
  ]
})
export class UiModule { }
