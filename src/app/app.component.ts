import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from './services/time.service';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import * as calendar from 'dayjs/plugin/calendar';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public time: string = '';

  constructor(public timeService: TimeService, public router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.timeService.getTime().slice(0, 5);
    }, 500);

    dayjs.extend(relativeTime);
    dayjs.extend(localizedFormat);
    dayjs.extend(calendar);
  }
}
