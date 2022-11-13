import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  public clockRotation$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  public time$: Observable<string> = new Observable<string>(
    (subscriber: Subscriber<string>) => {
      setInterval(() => {
        subscriber.next(dayjs().format(this.clockFormat));
      });
    }
  );

  public clockFormat: string = 'HH:mm:ss';

  public getTime$(format: string = this.clockFormat): Observable<string> {
    return new Observable<string>((subscriber: Subscriber<string>) => {
      setInterval(() => subscriber.next(dayjs().format(format)));
    });
  }

  public getHello(): string {
    const currentHours = dayjs().hour();

    if (6 < currentHours && currentHours < 12) {
      return 'Доброе утро!';
    }

    if (11 < currentHours && currentHours < 18) {
      return 'Добрый день!';
    }

    if (17 < currentHours && currentHours < 24) {
      return 'Добрый вечер!';
    }

    return 'Доброй ночи!';
  }

  public rotateClock(degrees: number): void {
    this.clockRotation$.next((this.clockRotation$.value + degrees) % 360);
  }
}
