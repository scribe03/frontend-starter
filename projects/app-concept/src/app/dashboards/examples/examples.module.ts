import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { WalletComponent } from './lifecycle-hooks/wallet/wallet.component';
import { MoneyComponent } from './lifecycle-hooks/money/money.component';
import { SvgComponent } from './svg/svg.component';
import { RectangleInteractiveComponent } from './svg/rectangle-interactive/rectangle-interactive.component';
import { SharedConceptModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { UiModule } from '@master/ui/ui.module';

@NgModule({
  declarations: [
    LifecycleHooksComponent, WalletComponent, MoneyComponent, SvgComponent,
    RectangleInteractiveComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MaterialModule,
    UiModule,
    SharedConceptModule
  ]
})
export class ExamplesModule { }
