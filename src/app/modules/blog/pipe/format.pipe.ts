import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      return value.split(' ')[0];
    }
    return value;
  }

}
