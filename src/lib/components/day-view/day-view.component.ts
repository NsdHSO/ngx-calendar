import {CommonModule} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {HourTimeComponent} from '../hour-time/hour-time.component';
import {
  LineHorizontalDirective,
  NoModifiedEnum,
  PeriodHourEnum,
  TimePeriodPipe
} from '../utils';

@Component({
  selector: 'ngx-day-view',
  standalone: true,
  imports:[
    CommonModule,
    TimePeriodPipe,
    LineHorizontalDirective,
    HourTimeComponent,
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

  }

  ngOnInit() : void {
    //
  }

  public selectSegment(index: number){
    console.log(index)
  }
}
