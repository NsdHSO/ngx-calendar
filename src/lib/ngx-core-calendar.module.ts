import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {NgxCalendarModule} from './ngx-calendar.module';

@NgModule({})
export class NgxCalendarTSModule {
  constructor(@Optional() @SkipSelf() parent : NgxCalendarModule) {
    if(parent) {
      throw new Error(
        'Parent {CORE DRIVER MODULE } is loaded');
    }
  }

  static forRoot() : ModuleWithProviders<NgxCalendarModule> {
    return {
      ngModule: NgxCalendarModule
    };
  }
}
