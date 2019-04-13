import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicFormActionComponent } from './components/basic-form-action/basic-form-action.component';
import { MouseDownUpDirective } from './directives/mouse-down-up/mouse-down-up.directive';
import { SpinnerComponent } from '@master/shared/components/spinner/spinner.component';

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
export class SharedModule {
}
