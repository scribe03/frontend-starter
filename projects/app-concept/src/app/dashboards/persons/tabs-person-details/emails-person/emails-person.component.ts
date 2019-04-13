import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Person } from '@master/core/apis/persons/person.interface';

@Component({
    selector: 'sce-emails-person',
    templateUrl: './emails-person.component.html',
    styleUrls: ['./emails-person.component.scss']
})
export class EmailsPersonComponent implements OnInit {
    public data: Person;
    public form: FormGroup;
    @Output() public save = new EventEmitter<Person>();

    @Input() set person(data: Person) {
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
