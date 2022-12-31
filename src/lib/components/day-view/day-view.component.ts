import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-day-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selectSegment($event : MouseEvent, index: number) : void {
    const hours = index/60;
    const minute = Math.abs(hours) - Math.floor(hours)
    console.log($event,Math.abs(hours).toFixed()+","+ Math.abs(minute * 60).toFixed())
  }
}
