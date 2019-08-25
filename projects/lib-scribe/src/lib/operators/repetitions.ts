import { MonoTypeOperatorFunction, Observable, of } from 'rxjs';
import { delay, expand, takeWhile } from 'rxjs/operators';

function repetitions<T>(delayTime: number, isRepetitionFn: (result: T) => boolean): MonoTypeOperatorFunction<T> {
  let isNext = true;

  return (input$: Observable<T>) =>
    input$.pipe(
      expand((result: T) => {
        if (!isRepetitionFn(result)) {
          return input$.pipe(delay(delayTime));
        }

        isNext = false;
        return of(result);
      }),
      takeWhile(() => isNext));
}
