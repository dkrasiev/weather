import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../shared/weather-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  query: string = '';
  weatherData: WeatherResponse = null as any;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search() {
    this.isLoading = true;

    this.http
      .get<WeatherResponse>(environment.freeWeather.apiCurrent, {
        params: {
          key: environment.freeWeather.token,
          q: this.query,
          aqi: 'no',
        },
      })
      .subscribe({
        next: (v) => {
          console.log(v);

          this.weatherData = v;

          this.isLoading = false;
        },
        error: (e) => {
          console.error(e);
          this.isLoading = false;
        },
      });
  }
}
