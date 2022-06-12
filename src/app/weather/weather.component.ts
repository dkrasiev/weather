import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ForecastResponse } from '../types/forecast-response';
import { RealtimeResponse } from '../types/realtime-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public query: string = '';
  public isLoading: boolean = false;
  public loadedWeather: ForecastResponse | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  search() {
    this.isLoading = true;

    this.weatherService.getForecast(this.query).subscribe({
      next: (v) => {
        this.loadedWeather = v;

        console.log(v);

        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
      },
    });
  }
}
