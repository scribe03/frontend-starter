import { MonoTypeOperatorFunction, Observable, of } from 'rxjs';
import { delay, expand, takeWhile } from 'rxjs/operators';

function repetitions<T>(delayTime: number, isStopRepetitionFn: (result: T) => boolean): MonoTypeOperatorFunction<T> {
  let isNext = true;

  return (input$: Observable<T>) =>
    input$.pipe(
      expand((result: T) => {
        if (!isStopRepetitionFn(result) && isNext) {
          return input$.pipe(delay(delayTime));
        }

        isNext = false;
        return of(result);
      }),
      takeWhile(() => isNext));
}
