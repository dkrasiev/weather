import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherResponse } from '../types/weather-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public query: string = '';
  public isLoading: boolean = false;
  public loadedWeather: WeatherResponse | null = null;

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
  }
}
