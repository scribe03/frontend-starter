import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyComponent } from './money.component';
import { MaterialModule } from '@shared/material.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

describe('MoneyComponent', () => {
    let component: MoneyComponent;
    let fixture: ComponentFixture<MoneyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                CoreModule,
                SharedModule,
            ],
            declarations: [MoneyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoneyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
