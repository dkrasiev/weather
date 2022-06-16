import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  public isVertical: boolean = false;

  constructor(public timeService: TimeService) {}

  ngOnInit(): void {}
}
