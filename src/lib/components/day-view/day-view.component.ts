import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimePeriodPipe} from '../utils/directive/time-perriod.pipe';

@Component({
  selector: 'lib-day-view',
  standalone: true,
  imports: [
    CommonModule,
    TimePeriodPipe
  ],
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selectSegment($event : MouseEvent, index: number) : string {
    const hours = index/60;
    const minute = Math.abs(hours) - Math.floor(hours)
    return Math.abs(hours).toFixed()+":"+ Math.abs(minute * 60).toFixed()
  }

  currentSlotAddOrOdd(index: number){
    const hours = index/60;
    const minute = Math.abs(hours) - Math.floor(hours)
    return +Math.abs(hours).toFixed() >= 11 ?  Math.abs(hours).toFixed()+":"+ Math.abs(minute * 60).toFixed()+'AM' : Math.abs(hours).toFixed()+":"+ Math.abs(minute * 60).toFixed()+'PM'
  }
}
