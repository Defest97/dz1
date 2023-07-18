import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    if (!phoneNumber || phoneNumber.length !== 10) {
      return phoneNumber; 
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 5)} – ${phoneNumber.slice(5, 7)} – ${phoneNumber.slice(7)}`;
  }

}
