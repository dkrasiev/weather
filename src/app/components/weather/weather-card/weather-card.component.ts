import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/types/forecast-response';
import { Forecastday } from '../../../types/forecast-response';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  @Input() public weatherData: Forecastday | undefined = undefined;
  @Input() public locationData: Location | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
