import { Component, Input, OnInit } from '@angular/core';
import { Current, Location } from 'src/app/types/forecast-response';

@Component({
  selector: 'app-weather-card-current',
  templateUrl: './weather-card-current.component.html',
  styleUrls: ['./weather-card-current.component.css'],
})
export class WeatherCardCurrentComponent implements OnInit {
  @Input() public weatherData: Current | undefined = undefined;
  @Input() public locationData: Location | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
