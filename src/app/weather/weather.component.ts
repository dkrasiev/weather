import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GeocoderResponse, GeoObject } from '../shared/geocoder-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  geocode: string = '';
  geoObject: GeoObject = null as any;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  search() {
    this.isLoading = true;

    this.http
      .get<GeocoderResponse>(environment.yandex.geocoderApi, {
        params: {
          geocode: this.geocode,
          apikey: environment.yandex.geocoderToken,
          format: 'json',
          kind: 'locality',
          results: 1,
        },
      })
      .subscribe({
        next: (v) => {
          this.geoObject =
            v.response.GeoObjectCollection.featureMember[0].GeoObject;
            
          // Тест api погоды
          this.http
            .get(environment.yandex.weatherApi, {
              headers: { 'X-Yandex-API-Key': environment.yandex.weatherToken },
              params: {
                lat: this.geoObject.Point.pos.split(' ')[0],
                lon: this.geoObject.Point.pos.split(' ')[1],
              },
            })
            .subscribe({
              next: (v) => {
                console.log(v);
              },
              error: (e) => console.log(e),
            });
        },
        error: (e) => {
          console.error(e);
          this.isLoading = false;
        },
        complete: () => {
          console.log('completed');
          this.isLoading = false;
        },
      });
  }
}
