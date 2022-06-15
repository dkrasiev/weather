import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
          // response.forecast.forecastday = response.forecast.forecastday.filter(
          //   (day) => {
          //     return day.date.split('-')[2] != new Date().getDate().toString();
          //   }
          // );

          for (const [index, day] of response.forecast.forecastday.entries()) {
            switch (Number(day.date.split('-')[2]) - new Date().getDate()) {
              case 0: {
                day.date = 'Сегодня';
                break;
              }
              case 1: {
                day.date = 'Завтра';

                break;
              }
              case 2: {
                day.date = 'Послезавтра';
                break;
              }
            }
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
