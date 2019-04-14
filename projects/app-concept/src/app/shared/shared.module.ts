import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { SidenavLeftMenuComponent } from './components/layout/sidenav-left-menu/sidenav-left-menu.component';
import { UiModule } from '@master/ui/ui.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        UiModule
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
