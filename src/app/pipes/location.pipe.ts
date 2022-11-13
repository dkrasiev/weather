import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../types/forecast-response';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(location: Location): string {
    return `${location.country}, ${location.region}, ${location.name}`;
  }

}
