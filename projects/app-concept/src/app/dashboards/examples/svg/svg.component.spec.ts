import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg.component';
import { RectangleInteractiveComponent } from './rectangle-interactive/rectangle-interactive.component';
import { SharedConceptModule } from '../../../shared/shared.module';
import { UiModule } from '@master/ui/ui.module';

describe('SvgComponent', () => {
    let component: SvgComponent;
    let fixture: ComponentFixture<SvgComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                UiModule,
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
