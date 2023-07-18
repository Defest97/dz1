import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(price: number, currency: string, exchangeRate: number): string {
    if (isNaN(price) || isNaN(exchangeRate)) {
      return '';
    }

    const convertedPrice = price * exchangeRate;

    return `${convertedPrice.toFixed(2)} ${currency}`;
  }

}
