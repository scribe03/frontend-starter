import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { BarFormButtonsComponent } from './components/bar-form-buttons/bar-form-buttons.component';
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
        BarFormButtonsComponent,
        SpinnerComponent,
        MouseDownUpDirective
    ],
    exports: [
        // COMPONENTS
        MainContainerComponent,
        BarFormButtonsComponent,
        SpinnerComponent,
        MouseDownUpDirective
        // DIRECTIVES
        // PIPES
    ]
})
export class SharedModule {
}
