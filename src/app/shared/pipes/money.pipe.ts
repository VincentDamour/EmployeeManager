import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'money'})
export class MoneyPipe implements PipeTransform {
  transform(value: number): string {
    const valueAsString = value.toString();
    const formattedValue = valueAsString.replace(/./g, (c, i, a) => i && ((a.length - i) % 3 === 0) ? ',' + c : c);
    return `$${formattedValue}`;
  }
}
