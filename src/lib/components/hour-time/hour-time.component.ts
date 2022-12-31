import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hour-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hour-time.component.html',
  styleUrls: ['./hour-time.component.css']
})
export class HourTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
