import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastResponse } from '../types/forecast-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

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
        })
      );
  }
}
