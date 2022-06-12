import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { RealtimeResponse } from '../types/realtime-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public query: string = '';
  public isLoading: boolean = false;
  public loadedWeather: RealtimeResponse | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  search() {
    this.isLoading = true;

    this.weatherService.getCurrentWeather(this.query).subscribe({
      next: (v) => {
        this.loadedWeather = v;

        console.log(this.loadedWeather);

        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
      },
    });

    this.weatherService.getForecast(this.query).subscribe({
      next: (v) => {
        console.log(v);
      },
    });
  }
}
