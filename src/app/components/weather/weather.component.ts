import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import {
  ForecastResponse,
  Location,
} from '../../types/forecast-response';

interface Model {
  state: 'PENDING' | 'READY' | 'ERROR';
  forecast?: ForecastResponse;
  error?: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public model: Model = {
    state: 'READY',
  };
  public query: string = '';
  public autocomplete: Location[] = [];

  constructor(
    public weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const query = params['q'];
      if (query) {
        this.query = query;
        this._search(this.query);
      }
    });
  }

  public updateQuery(query: string) {
    this.router.navigate(['/weather'], {
      queryParams: { q: query },
    });
  }

  public updateAutocomplete(query: string) {
    if (query.length < 3) {
      this.autocomplete = [];
      return;
    }

    this.weatherService.match(query).subscribe({
      next: (v: Location[]) => {
        this.autocomplete = v;
      },
    });
  }

  private _search(query: string) {
    this.model.state = 'PENDING';
    this.model.error = undefined;
    this.autocomplete = [];

    this.weatherService.getForecast(query).subscribe({
      next: (v: ForecastResponse) => {
        this.model.state = 'READY';
        this.model.forecast = v;
      },
      error: (e: Error) => {
        this.model.state = 'ERROR';
        this.model.error = e.message;
      },
      complete: () => {
        this.autocomplete = [];
      },
    });
  }
}
