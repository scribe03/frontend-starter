import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fds-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
    @Input() title: string;
    @Input() isHiddenBtnBack = false;
    @Input() isHiddenBtnAdd = false;
    @Input() isHiddenBtnCancel = false;
    @Input() isHiddenBtnSave = false;
    @Input() isHiddenFooter = false;
    @Output() back = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() save = new EventEmitter();
    @Output() add = new EventEmitter();


    constructor() {
    }

    public ngOnInit() {
    }

    public btnBack(): void {
        this.back.emit(true);
    }

    public btnCancel(): void {
        this.cancel.emit(true);
    }

    public btnSave(): void {
        this.save.emit(true);
    }

    public btnAdd(): void {
        this.add.emit(true);
    }
}
