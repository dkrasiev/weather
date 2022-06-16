import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
})
export class TempPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    value = value.toString();

    if (Number(value) > 0) value = '+' + value;

    value += ' °C';

    return value;
  }
}
