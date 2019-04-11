import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { QueryCriteria, QueryCriteriaPaginate } from '@library/rest-api-client';
import { ApiPersonsService } from '@core/apis/persons/api-persons.service';
import { Person } from '@core/apis/persons/person.interface';

@Component({
    selector: 'sce-list-persons',
    templateUrl: './list-persons.component.html',
    styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent implements OnInit {
    public isLoading = false;
    public countPersons = 0;
    public persons$: Observable<Person[]>;
    public displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'preview', 'remove'];
    // https://github.com/angular/material2/issues/5812
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private router: Router,
        private apPersons: ApiPersonsService
    ) {}

    ngOnInit() {
        this.loadPersons({pageIndex: 0, pageSize: 10, length: 0});
    }

    public loadPersons(event: PageEvent): void {
        this.isLoading = true;
        const criteria: QueryCriteria[] = [];
        criteria.push(new QueryCriteriaPaginate(event.pageIndex + 1, event.pageSize));

        this.persons$ = this.apPersons.count().pipe(
            map(countPersons => this.countPersons = countPersons),
            switchMap(() => this.apPersons.fetch(criteria)),
            tap(() => this.isLoading = false)
        );
    }

    public add(): void {
        this.router.navigate(['/', 'persons', 'add']);
    }

    public remove(id: number): void {
        this.apPersons.delete(id).subscribe(() => {
            this.loadPersons({pageIndex: 0, pageSize: 10, length: 0});
            this.paginator.pageIndex = 0;
        });
    }
}

// --- move to service ?
// this.isLoading
// this.countPersons
// this.paginator.pageIndex

// BehaviorSubject ??
// isLoading$
// persons$
// countPersons$

// --

// @Injectable()
// export class LessonSelectedService {
//
//     private _selected: BehaviorSubject<Lesson> = new BehaviorSubject(null);
//
//     public selected$ = this._selected.asObservable().filter(lesson => !!lesson);
//
//
//     select(lesson:Lesson) {
//         this._selected.next(lesson);
//     }
//
// }
