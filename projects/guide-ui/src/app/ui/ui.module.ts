import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { ModalsComponent } from './windows/modals/modals.component';
import { ExtremelySimpleModalComponent } from './windows/modals/extremely-simple-modal/extremely-simple-modal.component';
import { UiModule as ScribeUiModule} from '@master/ui/ui.module';

export const components: Type<any>[] = [
  ModalsComponent,
  ExtremelySimpleModalComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    UiRoutingModule,
    ScribeUiModule
  ]
})
export class UiModule { }
