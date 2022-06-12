import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastResponse } from '../types/forecast-response';
import { RealtimeResponse } from '../types/realtime-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(query: string): Observable<RealtimeResponse> {
    return this.http.get<RealtimeResponse>(
      environment.freeWeather.realtimeAPI,
      {
        params: {
          key: environment.freeWeather.token,
          q: query,
          aqi: 'no',
          lang: 'ru',
        },
      }
    );
  }

  getForecast(query: string): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(
      environment.freeWeather.forecastAPI,
      {
        params: {
          key: environment.freeWeather.token,
          q: query,
          days: 10,
          aqi: 'no',
          alerts: 'no',
          lang: 'ru',
        },
      }
    );
  }
}
