import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  getTime(): string {
    return dayjs().format('hh:mm:ss');
  }

  getHello(): string {
    const currentHours = new Date().getHours();

    if (6 < currentHours && currentHours < 12) {
      return 'Доброе утро!';
    } else if (11 < currentHours && currentHours < 18) {
      return 'Добрый день!';
    } else if (17 < currentHours && currentHours < 24) {
      return 'Добрый вечер!';
    }

    return 'Доброй ночи!';
  }
}
