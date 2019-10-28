import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { InputTextComponent } from './input-text/input-text.component';
import { UiModule } from '@master/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [InputTextComponent, SelectComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class FormModule {
}
