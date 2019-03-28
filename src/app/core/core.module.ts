import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiCvModule } from './api/cv/api-cv.module';
import { throwIfAlreadyLoaded } from './quards/module-inport-guard';
import { SidenavLeftMenuComponent } from './components/sidenav-left-menu/sidenav-left-menu.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        ApiCvModule,
        MaterialModule
    ],
    declarations: [
        SidenavLeftMenuComponent
    ],
    exports: [
        SidenavLeftMenuComponent
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
