import { BehaviorSubject, Observable } from 'rxjs';
import { Action } from '../interfaces/action.interface';

export type Reducer = <T>(state: T, action: Action) => T;

const exampleConcreteReducer: Reducer = <T>(state: T, action: Action): T => {
  return {} as T;
};

export abstract class State<T> {
  public store$: Observable<T>;
  protected store = new BehaviorSubject<T>({} as T);
  protected state: T;

  protected constructor() {
    this.store$ = this.store.asObservable();
  }

  // @OVERRIDE
  public reduce(action: Action): void {
    this.state = exampleConcreteReducer<T>(this.state, action);
    this.publish(this.state);
  }

  public getState(): T {
    return this.state;
  }

  protected publish(store: T): void {
    this.store.next(store);
  }
}
