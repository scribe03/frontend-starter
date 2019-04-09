import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPersonsService } from '@core/api/persons/api-persons.service';
import { Person, PersonFactory } from '@core/api/persons/person.interface';

@Component({
    selector: 'fds-tabs-person-details',
    templateUrl: './tabs-person-details.component.html',
    styleUrls: ['./tabs-person-details.component.scss']
})
export class TabsPersonDetailsComponent implements OnInit {
    public personId: string;
    public person: Person;
    public isAddMode = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiPersons: ApiPersonsService
    ) {
    }

    public ngOnInit() {
        this.activatedRoute.params.subscribe(val => {
            this.personId = val.id;
            this.isAddMode = (this.personId === 'add') ? true : false;
            this.loadPerson();
        });
    }

    public goBack(): void {
        this.router.navigate(['../']);
    }

    public loadPerson(): void {
        if (this.personId && !this.isAddMode) {
            console.log('loadPerson::fetchById');
            this.apiPersons.fetchById(this.personId).subscribe((res: Person) => this.person = res);
        }
    }

    public savePerson(data: Person): void {
        this.apiPersons.save(PersonFactory.create(data)).subscribe((person: Person) => {
            if (this.isAddMode) {
                this.router.navigate(['/', 'persons', person.id]);
            }
        });
    }
}
