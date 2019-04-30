import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
    public fg: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.generateForm();
    }

    private generateForm(): void {
        this.fg = this.fb.group({
            surname: ['', [
                    Validators.required,
                    Validators.email,
                    Validators.minLength(5),
                    Validators.maxLength(10)
                ]
            ],
            name: [''],
            country: ['Francja'],
            city: ['']
        });
    }

}
