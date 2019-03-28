import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { WalletComponent } from './wallet/wallet.component';
import { MoneyComponent } from './money/money.component';

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
