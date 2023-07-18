import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicates'
})
export class RemoveDuplicatesPipe implements PipeTransform {

  transform(value: string): string {
    let result = '';
    if (value !== null || value !== '')
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== value[i + 1]) {
          result += value[i];
        }
      }

    return result;
  }

}
