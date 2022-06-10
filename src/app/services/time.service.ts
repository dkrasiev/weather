import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  getTime(): string {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const time = `${hours < 10 ? '0' + hours : hours.toString()}:${
      minutes < 10 ? '0' + minutes : minutes.toString()
    }:${seconds < 10 ? '0' + seconds : seconds.toString()}`;

    return time;
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
