import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  public clockRotation: number = 0;

  constructor() {}

  getTime(): string {
    return dayjs().format('HH:mm:ss');
  }

  getHello(): string {
    const currentHours = dayjs().hour();

    if (6 < currentHours && currentHours < 12) {
      return 'Доброе утро!';
    } else if (11 < currentHours && currentHours < 18) {
      return 'Добрый день!';
    } else if (17 < currentHours && currentHours < 24) {
      return 'Добрый вечер!';
    }

    return 'Доброй ночи!';
  }

  rotateClock() {
    this.clockRotation += 90;

    if (this.clockRotation == 360) this.clockRotation = 0;
  }
}
