import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyComponent } from './money.component';
import { CoreModule } from '@master/core/core.module';
import { MaterialModule } from '../../../../shared/material.module';
import { SharedConceptModule } from '../../../../shared/shared.module';
import { UiModule } from '@master/ui/ui.module';

describe('MoneyComponent', () => {
    let component: MoneyComponent;
    let fixture: ComponentFixture<MoneyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                CoreModule,
                UiModule,
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
