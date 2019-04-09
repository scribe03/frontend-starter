import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Person } from '@core/api/persons/person.interface';

@Component({
    selector: 'fds-edit-person',
    templateUrl: './edit-person.component.html',
    styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
    public data: Person;
    public form: FormGroup;
    @Output() public save = new EventEmitter<Person>();

    @Input() set person(data: Person) {
        this.createForm();
        if (data) {
            this.data = data;
            this.form.patchValue(this.data);
        }
    }

    constructor(private fb: FormBuilder) {}

    public ngOnInit() {}

    protected createForm(): void {
        if (!this.form) {
            this.form = this.fb.group({
                name: [''],
                surname: [''],
                age: [0],
                identification_data: this.fb.group({
                    pesel: [null],
                    nip: [null],
                    regon: [null]
                }),
            });
        }
    }

    public btnSave(): void {
        this.save.emit({...this.data, ...this.form.value});
    }
}
