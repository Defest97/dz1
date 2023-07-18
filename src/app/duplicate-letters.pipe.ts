import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicateLetters'
})
export class DuplicateLettersPipe implements PipeTransform {

  transform(name: string): string {
    if (!name || name.length === 0) {
      return name;
    }

    let duplicatedName = '';
    for (let i = 0; i < name.length; i++) {
      duplicatedName += name[i] + name[i];
    }

    return duplicatedName;
  }

}
