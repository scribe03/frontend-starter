import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';
import { InputGroupComponent } from '@master/ui/form/input-group/input-group.component';
import { ValidationMessagesComponent } from '@master/ui/form/validation-messages/validation-messages.component';
import { InputDirective } from '@master/ui/directives/form/input/input.directive';
import { SelectGroupComponent } from '@master/ui/form/select/select-group/select-group.component';

import { ModalComponent } from '@master/ui/windows/modal/modal.component';
import { ModalContentComponent } from '@master/ui/windows/modal/modal-content/modal-content.component';
import { ModalFooterComponent } from '@master/ui/windows/modal/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '@master/ui/windows/modal/modal-header/modal-header.component';
import { SelectOptionComponent } from '@master/ui/form/select/select-option/select-option.component';


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
    SelectGroupComponent,
    SelectOptionComponent
  ],
  exports: [
    // COMPONENTS
    // FORMS
    InputGroupComponent,
    ValidationMessagesComponent,
    SelectGroupComponent,
    SelectOptionComponent,
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
