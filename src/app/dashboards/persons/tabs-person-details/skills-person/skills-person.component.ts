import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { IPerson, IPersonDeveloperSkills } from '@core/api/cv/models/person.interface';
import { IDictionary } from '@core/api/cv/models/dictionary.interface';
import { ApiDictionaryService } from '@core/api/cv/services/api-dictionary/api-dictionary.service';

@Component({
    selector: 'fds-skills-person',
    templateUrl: './skills-person.component.html',
    styleUrls: ['./skills-person.component.scss']
})
export class SkillsPersonComponent implements OnInit {
    public data: IPerson;
    public form: FormGroup;
    public dictionary$: Observable<IDictionary[]>;
    @Output() public save = new EventEmitter<IPerson>();

    @Input() set person(data: IPerson) {
        this.createForm();
        if (data) {
            this.data = data;
            (this.data.developer_skills || []).forEach((skill) => this.addSkill(skill));
        }
    }

    constructor(
        private fb: FormBuilder,
        private dictionaryService: ApiDictionaryService) {
    }

    public ngOnInit() {
        this.dictionary$ = this.dictionaryService.fetchCollectionById('developer_skills');
    }

    public addSkill(skill: IPersonDeveloperSkills): void {
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
