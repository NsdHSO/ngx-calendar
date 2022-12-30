import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {NgxCalendarComponent} from './ngx-calendar.component';

const routes : Routes = [
  {
    path: '',
    component: NgxCalendarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class NgxCalendarRoutingModule {}
