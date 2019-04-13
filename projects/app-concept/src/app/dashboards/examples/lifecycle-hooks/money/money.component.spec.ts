import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyComponent } from './money.component';
import { CoreModule } from '@master/core/core.module';
import { SharedModule } from '@master/shared/shared.module';
import { MaterialModule } from '../../../../shared/material.module';
import { SharedConceptModule } from '../../../../shared/shared.module';

describe('MoneyComponent', () => {
    let component: MoneyComponent;
    let fixture: ComponentFixture<MoneyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                CoreModule,
                SharedModule,
                SharedConceptModule
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
