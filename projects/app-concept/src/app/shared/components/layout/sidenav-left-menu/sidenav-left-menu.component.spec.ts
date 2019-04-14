import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLeftMenuComponent } from './sidenav-left-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../material.module';
import { SharedConceptModule } from '../../../shared.module';
import { UiModule } from '@master/ui/ui.module';

describe('SidenavLeftMenuComponent', () => {
    let component: SidenavLeftMenuComponent;
    let fixture: ComponentFixture<SidenavLeftMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                UiModule,
                SharedConceptModule
            ],
            declarations: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidenavLeftMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
