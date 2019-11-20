import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Action } from '../interfaces/action.interface';

export type Reducer<T> = (state: T, action: Action) => T;

const exampleConcreteReducer: Reducer<any> = (state: any, action: Action): any => null;

export abstract class State<T> {
  public store$: Observable<T>;
  protected store: Subject<T> = new BehaviorSubject<T>({} as T);
  protected state: T;

  protected constructor() {
    this.store$ = this.store.asObservable();
  }

  /**
   * @OVERRIDE you have to prepare and use concrete reducer !
   */
  public reduce(action: Action): void {
    this.state = exampleConcreteReducer(this.state, action);
    this.publish(this.state);
  }

  public getState(): T {
    return this.state;
  }

  protected publish(store: T): void {
    this.store.next(store);
  }
}
