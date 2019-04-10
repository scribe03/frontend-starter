import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fds-basic-form-action',
    templateUrl: './basic-form-action.component.html',
    styleUrls: ['./basic-form-action.component.scss']
})
export class BasicFormActionComponent implements OnInit {
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
