import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiModule } from './api/api.module';
import { throwIfAlreadyLoaded } from './quards/module-inport-guard';
import { SidenavLeftMenuComponent } from '../shared/components/layout/sidenav-left-menu/sidenav-left-menu.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        ApiModule,
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
