import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg.component';
import { SharedModule } from '@shared/shared.module';
import { RectangleInteractiveComponent } from './rectangle-interactive/rectangle-interactive.component';

describe('SvgComponent', () => {
    let component: SvgComponent;
    let fixture: ComponentFixture<SvgComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule
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
