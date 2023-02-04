import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'lib-ngx-calendar',
  template: `
    <ngx-day-view></ngx-day-view>
  `,
  styles: []
})
export class NgxCalendarComponent implements OnInit {
  constructor() { }

  ngOnInit() : void {
  }
}
