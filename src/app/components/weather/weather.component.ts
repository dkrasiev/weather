import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { ForecastResponse, Location } from '../../types/forecast-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public query: string = '';
  public isLoading: boolean = false;
  public loadedWeather: ForecastResponse | null = null;
  public error: string | null = null;

  public autocomplete: Location[] = [];

  constructor(
    public weatherService: WeatherService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      this.query = params['q'];
      if (this.query) this.search();
    });
  }

  search() {
    this.isLoading = true;
    this.autocomplete = [];
    this.error = null;

    this._router.navigate(['/weather'], {
      queryParams: { q: this.query },
    });

    this.weatherService.getForecast(this.query).subscribe({
      next: (v) => {
        this.loadedWeather = v;

        this.isLoading = false;
        this.autocomplete = [];
      },
      error: (e) => {
        this.error = e;

        this.isLoading = false;
        this.autocomplete = [];
      },
    });
  }

  updateAutocomplete() {
    if (this.query.length < 3) {
      this.autocomplete = [];
      return;
    }

    this.weatherService.match(this.query).subscribe({
      next: (v) => {
        this.autocomplete = v;
      },
    });
  }
}
