import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { ModalsComponent } from './windows/modals/modals.component';
import { ExtremelySimpleComponent } from './windows/modals/extremely-simple/extremely-simple.component';
import { UiModule as ScribeUiModule} from '@master/ui/ui.module';

export const components: Type<any>[] = [
  ModalsComponent,
  ExtremelySimpleComponent
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
