import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-calendar',
  template: `
    <lib-day-view></lib-day-view>
  `,
  styles: [
  ]
})
export class NgxCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
