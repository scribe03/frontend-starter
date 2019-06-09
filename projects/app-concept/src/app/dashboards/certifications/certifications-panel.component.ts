import { Component, OnInit, ViewChild } from '@angular/core';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
    selector: 'sc-certifications-panel',
    templateUrl: './certifications-panel.component.html',
    styleUrls: ['./certifications-panel.component.scss']
})
export class CertificationsPanelComponent implements OnInit {
    @ViewChild(CertificationsComponent, {static: true}) certificationsComponent;

    constructor() {
    }

    public ngOnInit() {
    }

    public add(event): void {
        if (event) {
            this.certificationsComponent.resetPaginatorPageIndex();
        }
    }

}
