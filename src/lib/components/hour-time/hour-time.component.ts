import {CommonModule} from '@angular/common';
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector:'ngx-hour-time',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./hour-time.component.html',
  styleUrls:['./hour-time.component.scss'],
})
export class HourTimeComponent implements OnInit {
  @Input()
  hour = '';

  @Input()
  meetings = [
    {
      nameMeeting:'Open' +
        ' Account',
      startMeeting:new Date(),
      endMeeting:new Date(),
    },
  ];

  constructor() {
    let startMeeting = new Date();
    startMeeting.setHours(0);
    startMeeting.setMinutes(10);
    let endMeeting = new Date();
    endMeeting.setHours(0);
    endMeeting.setMinutes(20);
    this.meetings = [
      {
        nameMeeting:'Open' +
          ' Account',
        startMeeting,
        endMeeting,
      },
    ];
  }

  ngOnInit(): void {
  }

  public triggerMeeting(event: any, hour: string): void {
    console.log(event.x, "y: ", event.y, " ", event,hour)
    let t = event.target as HTMLHtmlElement
    console.log(t.getBoundingClientRect().height)
    console.log(event.path[5])
  }
}
