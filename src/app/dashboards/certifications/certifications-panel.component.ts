import { Component, OnInit, ViewChild } from '@angular/core';
import { CertificationsComponent } from './certifications/certifications.component';

@Component({
    selector: 'sce-certifications-panel',
    templateUrl: './certifications-panel.component.html',
    styleUrls: ['./certifications-panel.component.scss']
})
export class CertificationsPanelComponent implements OnInit {
    @ViewChild(CertificationsComponent) certificationsComponent;

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
