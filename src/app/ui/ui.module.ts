import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicFormActionComponent } from '@master/ui/components/basic-form-action/basic-form-action.component';
import { SpinnerComponent } from '@master/ui/components/spinner/spinner.component';
import { MouseDownUpDirective } from '@master/ui/directives/mouse-down-up/mouse-down-up.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BasicFormActionComponent,
    SpinnerComponent,
    MouseDownUpDirective
  ],
  exports: [
    // COMPONENTS
    BasicFormActionComponent,
    SpinnerComponent,
    MouseDownUpDirective
    // DIRECTIVES
    // PIPES
  ]
})
export class UiModule { }
