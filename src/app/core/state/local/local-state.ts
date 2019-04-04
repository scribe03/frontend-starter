import { Observable, Subject } from 'rxjs';
import { Action } from '@ngrx/store';

export abstract class LocalState {
    public store$: Observable<Action>;
    private store = new Subject<Action>();

    protected constructor() {
        this.store$ = this.store.asObservable();
    }

    public dispatch(action: Action): void {
        this.store.next(action);
    }
}
