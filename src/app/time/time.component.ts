import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  public time: string = '';

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.timeService.getTime();
    }, 10);
  }

  private _updateTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    this.time = `${hours < 10 ? '0' + hours : hours.toString()}:${
      minutes < 10 ? '0' + minutes : minutes.toString()
    }:${seconds < 10 ? '0' + seconds : seconds.toString()}`;
  }
}
