import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {

    // tslint:disable-next-line:prefer-const
    let keys = [];

    // tslint:disable-next-line:forin
    for ( let key in value) {
      keys.push(key);
    }

    return keys;
  }

}
