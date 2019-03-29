# Frontend Starter

## Usage
   All you have to do is create entity and service class for the given enpoint. Then you can use methods:
   
   * fetchById(),  
   * fetch(),  
   * count(),  
   * save() (or create(), update()),  
   * modify(),  
   * delete(),  
   * exist(),  
   * fetchByIdWithFullResponse()  - return Observable<HttpResponse<E>>,   
   * fetchWithFullResponse()  - return Observable<HttpResponse<E[]>>,   

 ```typescript
 export interface IPersonDeveloperSkills {
     code: string;
     level: number;
     timeOfUse: number;
 }
 
 export interface IPerson {
     id: number;
     name: string;
     surname: string;
     age: number;
     emails: string[];
     developer_skills: IPersonDeveloperSkills[];
 }
 ```

```typescript
@Injectable({
  providedIn: MyApiModule
})
export class ApiPersonService extends RestApiClientService<IPerson> {
  protected resourceUri = 'persons';

  constructor(httpClient: HttpClient) {
    super(httpClient, environment.apis.cv);
  }
}
```

```typescript
@Component({
    selector: 'fds-list-persons',
    templateUrl: './list-persons.component.html',
    styleUrls: ['./list-persons.component.scss']
})
export class MyPersonsComponent implements OnInit {
    public countPersons = 0;
    public persons$: Observable<IPerson[]>;
    
    constructor(private apiPersonService: ApiPersonService) {}

    public ngOnInit() {
        this.loadPersons();
    }

    public loadPersons(pageIndex = 0, pageSize = 10): void {
        const criteria: IQueryCriteria[] = [];
        criteria.push(new QueryCriteriaPaginate(pageIndex + 1, pageSize));

        this.persons$ = this.apiPersonService.count().pipe(
            map(countPersons => this.countPersons = countPersons),
            switchMap(() => this.apiPersonService.fetch(criteria))
        );
    }
}
```

## Nested enpoint

```typescript
@Injectable({
  providedIn: MyApiModule
})
export class ApiPersonService extends RestApiClientService<IPerson> {
  protected resourceUri = '{XID}/docs/{YID}/persons';
  protected xid: number;
  protected yid: number;
  
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.myApiUrl);
  }
  
  public setParams(xid: number, yid: number): this {
      this.xid = xid;
      this.yid = yid;
      return this;
  }
  
  // you have to overwrite standard method
  public getResourceUri(): string {
      return this.resourceUri
        .replace(/{XID}/g, this.xid)
        .replace(/{YID}/g, this.yid);
  }
}

// this.apiPersonService.setParams(1, 2).fetch()
```
## If header included the response

```typescript
this.apiPersonService.setOptions({observe: 'response'}).fetch()
```

Or use fetchByIdWithFullResponse(), fetchWithFullResponse() methods.

## QueryCriteria

You can add query params using QueryCriteria class.

If you want to use different criteria then all you have to do is 
implement the IQueryCriteria interface in your class.


#### Filter ####

```typescript
let criteria: IQueryCriteria[] = [];
    
let filters: IFiltersOption[] = []; 
filters.push({key: 'author', value: 'typicode'});
filters.push({key: 'author.name', value: 'typicode'});
criteria.push(new QueryCriteriaFilter(filters);

// other criteria ...

// GET /any-endpoint?author=typicode&author.name=typicode
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```

#### Paginate ####

```typescript
let criteria: IQueryCriteria[] = [];
criteria.push(new QueryCriteriaPaginate(1, 10));

// other criteria ...

// GET /any-endpoint?_page=1&_limit=10
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```
#### Sort ####

```typescript
let criteria: IQueryCriteria[] = [];
criteria.push(new QueryCriteriaSort('title', 'asc'));

// other criteria ...

// GET /any-endpoint?_sort=title&_order=asc
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```

#### Slice #### 

```typescript
let criteria: IQueryCriteria[] = [];
criteria.push(new QueryCriteriaSlice({start: 20, end: 30}));

// other criteria ...

// GET /any-endpoint?_start=20&_end=30
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```

#### Slice #### 

```typescript
let criteria: IQueryCriteria[] = [];
    
let operators: IOperatorOption[] = []; 
operators.push({key: 'title', operator: 'like', value: 'server'});
operators.push({key: 'id', operator: 'ne', value: 1});
criteria.push(new QueryCriteriaOperator(operators);

// other criteria ...

// GET /any-endpoint?title_like=server&id_ne=1
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```

#### Full-text-search #### 

```typescript
let criteria: IQueryCriteria[] = [];
criteria.push(new QueryCriteriaFullTextSearch('search-phrase'));

// other criteria ...

// GET /any-endpoint?q=search-phrase
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```

#### Relationships #### 

```typescript
let criteria: IQueryCriteria[] = [];
criteria.push(new QueryCriteriaRelationshipEmbed('comments'));
criteria.push(new QueryCriteriaRelationshipExpand('post'));

// other criteria ...

// GET /any-endpoint?_expand=post&_embed=comments
this.anyService.fetch(criteria).subscribe((res: AnyEntity[]) => {
    // ...
});
```
