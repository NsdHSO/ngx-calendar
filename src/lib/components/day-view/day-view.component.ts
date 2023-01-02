import {CommonModule} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  LineHorizontalDirective,
  NoModifiedEnum,
  PeriodHourEnum,
  TimePeriodPipe
} from '../utils';

@Component({
  selector: 'lib-day-view',
  standalone: true,
  imports: [
    CommonModule,
    TimePeriodPipe,
    LineHorizontalDirective
  ],
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  public d = false;
  get meetings() {
    return [
      {
        title: 'Speak about' +
          ' Performance',
        startMeeting: new Date(
          new Date().getTime() - 29999000),
        endMeeting: new Date(
          new Date().getTime() - 29200000)
      },
      {
        title: 'Morning' +
          ' Meet',
        startMeeting: new Date(
          new Date(new Date().getTime() - 682000)),
        endMeeting: new Date(
          new Date(new Date().getTime() - 68200))
      }
    ];
  }

  get zeroConst() {
    return NoModifiedEnum;
  }

  get periodHour() {
    return PeriodHourEnum;
  }

  constructor() { }

  currentInterval(index : number) {
    const newDate = new Date();
    const minutes = this.selectSegment(
      index)
      .toString()
      .split(':')[1];
    const hour = +(this.selectSegment(
      index)
      .toString()
      .split(':')[0])-1;
    newDate.setHours(+hour);
    newDate.setMinutes(+minutes);
    let d = false
    let a = this.meetings.filter(
      t =>{
         if(+hour === 3 && +minutes >= 21 ){
           debugger
         }
        this.d = newDate > t.startMeeting && newDate < t.endMeeting;
         return this.d
      }
    )
    console.log(a.length >= 1)
    return this.d
  }

  ngOnInit() : void {
    console.log(this.meetings)

  }

  public selectSegment(
    index : number) : string {
    const hours = index / 60;
    const minute = Math.abs(
      hours) - Math.floor(hours);
    return Math.abs(hours)
      .toFixed() + ':' + Math.abs(
      minute * 60)
      .toFixed();
  }
}
