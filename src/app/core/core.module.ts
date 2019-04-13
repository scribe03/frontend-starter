import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiModule } from './apis/api.module';
import { throwIfAlreadyLoaded } from './quards/module-inport-guard';

@NgModule({
    imports: [
        CommonModule,
        ApiModule
    ],
    declarations: [],
    exports: []
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
