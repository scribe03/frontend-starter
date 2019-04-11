import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { Person, PersonDeveloperSkills } from '@core/apis/persons/person.interface';
import { Dictionary } from '@core/apis/dictionaries/dictionary.interface';
import { ApiDictionariesService } from '@core/apis/dictionaries/api-dictionaries.service';

@Component({
    selector: 'sce-skills-person',
    templateUrl: './skills-person.component.html',
    styleUrls: ['./skills-person.component.scss']
})
export class SkillsPersonComponent implements OnInit {
    public data: Person;
    public form: FormGroup;
    public dictionary$: Observable<Dictionary[]>;
    @Output() public save = new EventEmitter<Person>();

    @Input() set person(data: Person) {
        this.createForm();
        if (data) {
            this.data = data;
            (this.data.developer_skills || []).forEach((skill) => this.addSkill(skill));
        }
    }

    constructor(
        private fb: FormBuilder,
        private dictionaryService: ApiDictionariesService) {
    }

    public ngOnInit() {
        this.dictionary$ = this.dictionaryService.fetchCollectionById('developer_skills');
    }

    public addSkill(skill: PersonDeveloperSkills): void {
        skill = (!skill) ? {code: '', level: 0, time_of_use: 0} : skill;
        (this.form.get('developer_skills') as FormArray).push(this.fb.group(skill));
    }

    public remove(i: number): void {
        (this.form.get('developer_skills') as FormArray).removeAt(i);
    }

    public btnSave(): void {
        this.save.emit({...this.data, ...this.form.value});
    }

    protected createForm(): void {
        if (!this.form) {
            this.form = this.fb.group({
                developer_skills: this.fb.array([])
            });
        }
    }
}
