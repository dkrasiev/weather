import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  currentDate: Date = new Date();
  time: string = '';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this._updateTime();
    }, 10);
  }

  private _updateTime() {
    this.currentDate = new Date();

    const hours = this.currentDate.getHours();
    const minutes = this.currentDate.getMinutes();
    const seconds = this.currentDate.getSeconds();

    this.time = `${hours < 10 ? '0' + hours : hours.toString()}:${
      minutes < 10 ? '0' + minutes : minutes.toString()
    }:${seconds < 10 ? '0' + seconds : seconds.toString()}`;
  }
}
