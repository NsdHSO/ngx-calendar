import {NgModule} from '@angular/core';
import {
  DayViewComponent,
  HourTimeComponent
} from './components';
import {NgxCalendarComponent} from './ngx-calendar.component';
import {NgxCalendarRoutingModule} from './ngx-routing-calendar.module';

@NgModule({
  declarations: [
    NgxCalendarComponent
  ],
  imports: [
    NgxCalendarRoutingModule,
    DayViewComponent,
    HourTimeComponent
  ],
  exports: [
    NgxCalendarComponent
  ]
})
export class NgxCalendarModule {}
