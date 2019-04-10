import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { BasicFormActionComponent } from './components/basic-form-action/basic-form-action.component';
import { MouseDownUpDirective } from './directives/mouse-down-up/mouse-down-up.directive';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    declarations: [
        MainContainerComponent,
        BasicFormActionComponent,
        SpinnerComponent,
        MouseDownUpDirective
    ],
    exports: [
        // COMPONENTS
        MainContainerComponent,
        BasicFormActionComponent,
        SpinnerComponent,
        MouseDownUpDirective
        // DIRECTIVES
        // PIPES
    ]
})
export class SharedModule {
}
