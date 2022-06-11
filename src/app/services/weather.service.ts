import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../types/weather-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(query: string) {
    return this.http.get<WeatherResponse>(environment.freeWeather.realtimeAPI, {
      params: {
        key: environment.freeWeather.token,
        q: query,
        aqi: 'no',
        lang: 'ru',
      },
    });
  }

  getForecast(query: string) {}
}
