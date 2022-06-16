import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  public time: string = '';
  public isVertical: boolean = false;

  constructor(public timeService: TimeService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.timeService.getTime();
    }, 50);
  }
}
