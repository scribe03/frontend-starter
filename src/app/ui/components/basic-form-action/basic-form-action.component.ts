import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'sc-basic-form-action',
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

    public onCancel(): void {
        this.cancel.emit(true);
    }

    public onSave(): void {
        this.save.emit(true);
    }
}
