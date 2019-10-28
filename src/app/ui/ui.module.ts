import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';
import { InputGroupComponent } from '@master/ui/form/input-group/input-group.component';
import { ValidationMessagesComponent } from '@master/ui/form/validation-messages/validation-messages.component';
import { SelectComponent } from '@master/ui/form/select/select.component';
import { InputDirective } from '@master/ui/directives/form/input/input.directive';

import { ModalComponent } from '@master/ui/windows/modal/modal.component';
import { ModalContentComponent } from '@master/ui/windows/modal/modal-content/modal-content.component';
import { ModalFooterComponent } from '@master/ui/windows/modal/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '@master/ui/windows/modal/modal-header/modal-header.component';

// ERROR: https://github.com/angular/angular/issues/29361
// import { ModalComponent } from './windows/modal/modal.component';

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
    ModalComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
    SelectComponent
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
    InputDirective,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalFooterComponent,
    // DIRECTIVES
    // PIPES
  ]
})
export class UiModule { }
