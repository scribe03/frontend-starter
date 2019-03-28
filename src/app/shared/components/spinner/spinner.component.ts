import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fds-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
    @Input() minHeight = 20;

    constructor() {
    }

    ngOnInit() {
    }

}
