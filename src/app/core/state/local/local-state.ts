import { BehaviorSubject, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

export abstract class LocalState {
    public store$: Observable<Action>;
    private store = new BehaviorSubject<Action>(null);

    protected constructor() {
        this.store$ = this.store.asObservable();
    }

    public dispatch(action: Action): void {
        this.store.next(action);
    }
}
