import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { SidenavLeftMenuComponent } from './components/layout/sidenav-left-menu/sidenav-left-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BasicFormActionComponent } from './components/basic-form-action/basic-form-action.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    declarations: [
        MainContainerComponent, SidenavLeftMenuComponent,
        SpinnerComponent, BasicFormActionComponent
    ],
    exports: [
        // COMPONENTS
        MainContainerComponent,
        SidenavLeftMenuComponent
        // DIRECTIVES
        // PIPES
    ]
})
export class SharedConceptModule {
}
