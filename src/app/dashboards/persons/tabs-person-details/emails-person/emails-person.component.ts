import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IPerson } from '@core/api/cv/models/person.interface';

@Component({
    selector: 'fds-emails-person',
    templateUrl: './emails-person.component.html',
    styleUrls: ['./emails-person.component.scss']
})
export class EmailsPersonComponent implements OnInit {
    public data: IPerson;
    public form: FormGroup;
    @Output() public save = new EventEmitter<IPerson>();

    @Input() set person(data: IPerson) {
        this.createForm();
        if (data) {
            this.data = data;
            (this.data.emails || []).forEach((email) => this.addEmail(email));
        }
    }

    constructor(private fb: FormBuilder) {}

    public ngOnInit() {}

    public addEmail(email: string): void {
        (this.form.get('emails') as FormArray).push(new FormControl(email, Validators.email));
    }

    public remove(i: number): void {
        (this.form.get('emails') as FormArray).removeAt(i);
    }

    public btnSave(): void {
        this.save.emit({...this.data, ...this.form.value});
    }

    protected createForm(): void {
        if (!this.form) {
            this.form = this.fb.group({
                emails: this.fb.array([])
            });
        }
    }
}
