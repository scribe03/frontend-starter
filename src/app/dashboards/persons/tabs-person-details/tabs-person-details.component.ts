import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPersonService } from '@core/api/cv/services/api-person/api-person.service';
import { IPerson, Person } from '@core/api/cv/models/person.interface';

@Component({
    selector: 'fds-tabs-person-details',
    templateUrl: './tabs-person-details.component.html',
    styleUrls: ['./tabs-person-details.component.scss']
})
export class TabsPersonDetailsComponent implements OnInit {
    public personId: string;
    public person: IPerson;
    public isAddMode = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiPersons: ApiPersonService
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
            this.apiPersons.fetchById(this.personId).subscribe((res: IPerson) => this.person = res);
        }
    }

    public savePerson(data: IPerson): void {
        this.apiPersons.save(Person.factory(data)).subscribe((person: IPerson) => {
            if (this.isAddMode) {
                this.router.navigate(['/', 'persons', person.id]);
            }
        });
    }
}
