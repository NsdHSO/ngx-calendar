import {NgModule} from '@angular/core';
import {NgxCalendarComponent} from './ngx-calendar.component';
import {NgxCalendarRoutingModule} from './ngx-routing-calendar.module';

@NgModule({
  declarations: [
    NgxCalendarComponent
  ],
  imports: [
    NgxCalendarRoutingModule
  ],
  exports: [
    NgxCalendarComponent
  ]
})
export class NgxCalendarModule {}
