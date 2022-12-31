import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePeriod',
  standalone: true
})
export class TimePeriodPipe implements PipeTransform {

  transform(value: any |unknown, ...args: unknown[]): unknown {
    const hours = value/60;
    const minute = Math.abs(hours) - Math.floor(hours)
    return +Math.abs(value).toFixed() > 11 ?  Math.abs(value).toFixed()+" AM" : Math.abs(value).toFixed()+" PM"

  }

}
