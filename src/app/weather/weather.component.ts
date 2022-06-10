import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public query: string = '';
  public isLoading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  search() {
    this.isLoading = true;

    this.weatherService.getWeather(this.query).subscribe({
      next: (v) => {
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
      },
    });
  }
}
