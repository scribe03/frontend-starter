import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLeftMenuComponent } from './sidenav-left-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/material.module';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavLeftMenuComponent', () => {
    let component: SidenavLeftMenuComponent;
    let fixture: ComponentFixture<SidenavLeftMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserAnimationsModule,
                MaterialModule,
                SharedModule,
            ],
            declarations: [SidenavLeftMenuComponent]
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
