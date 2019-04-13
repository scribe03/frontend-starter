import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { SharedModule } from '@master/shared/shared.module';
import { SidenavLeftMenuComponent } from './components/layout/sidenav-left-menu/sidenav-left-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [
        MainContainerComponent, SidenavLeftMenuComponent
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
