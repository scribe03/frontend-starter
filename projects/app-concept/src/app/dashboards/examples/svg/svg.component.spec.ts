import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg.component';
import { SharedModule } from '@master/shared/shared.module';
import { RectangleInteractiveComponent } from './rectangle-interactive/rectangle-interactive.component';
import { SharedConceptModule } from '../../../shared/shared.module';

describe('SvgComponent', () => {
    let component: SvgComponent;
    let fixture: ComponentFixture<SvgComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                SharedConceptModule
            ],
            declarations: [
                RectangleInteractiveComponent,
                SvgComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
