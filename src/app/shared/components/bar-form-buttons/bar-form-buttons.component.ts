import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fds-bar-form-buttons',
    templateUrl: './bar-form-buttons.component.html',
    styleUrls: ['./bar-form-buttons.component.scss']
})
export class BarFormButtonsComponent implements OnInit {
    @Input() isHiddenBtnCancel = false;
    @Input() isHiddenBtnSave = false;
    @Output() cancel = new EventEmitter();
    @Output() save = new EventEmitter();

    constructor() {
    }

    public ngOnInit() {
    }

    public btnCancel(): void {
        this.cancel.emit(true);
    }

    public btnSave(): void {
        this.save.emit(true);
    }
}
