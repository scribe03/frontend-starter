import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@master/core/core.module';
import { SharedModule } from '@master/shared/shared.module';
import { WalletComponent } from './wallet/wallet.component';
import { MoneyComponent } from './money/money.component';
import { SharedConceptModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';

describe('LifecycleHooksComponent', () => {
    let component: LifecycleHooksComponent;
    let fixture: ComponentFixture<LifecycleHooksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                CoreModule,
                SharedModule,
                SharedConceptModule
            ],
            declarations: [
                MoneyComponent,
                WalletComponent,
                LifecycleHooksComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LifecycleHooksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
