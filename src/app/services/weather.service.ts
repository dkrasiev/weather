import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as ru from 'dayjs/locale/ru';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastResponse, Location } from '../types/forecast-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  match(query: string): Observable<Location[]> {
    return this.http.get<Location[]>(environment.freeWeather.searchAPI, {
      params: {
        key: environment.freeWeather.token,
        q: query,
      },
    });
  }

  getForecast(query: string): Observable<ForecastResponse> {
    return this.http
      .get<ForecastResponse>(environment.freeWeather.forecastAPI, {
        params: {
          key: environment.freeWeather.token,
          q: query,
          days: 10,
          aqi: 'no',
          alerts: 'no',
          lang: 'ru',
        },
      })
      .pipe(
        tap((response) => {
          for (const day of response.forecast.forecastday) {
            const dayjsDate = dayjs(day.date).locale(ru);

            day.date = dayjsDate.calendar(dayjs(), {
              sameDay: '[Сегодня]', // The same day ( Today at 2:30 AM )
              nextDay: '[Завтра]', // The next day ( Tomorrow at 2:30 AM )
              nextWeek: 'dddd', // The next week ( Sunday at 2:30 AM )
              lastDay: '[Вчера]', // The day before ( Yesterday at 2:30 AM )
              lastWeek: '[В прошлый] dddd', // Last week ( Last Monday at 2:30 AM )
              sameElse: 'DD/MM/YYYY', // Everything else ( 7/10/2011 )
            });

            day.date = day.date[0].toUpperCase() + day.date.slice(1); // сделать первую букву заглавной
          }
        }),
        catchError((e) => {
          let error = 'Неизвестная ошибка';

          switch (e.status) {
            case 400:
              error = 'Город не найден';
          }

          throw error;
        })
      );
  }
}
