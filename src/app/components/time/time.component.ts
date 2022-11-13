import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent {
  public time$: Observable<string> = this.timeService.time$;
  public isVertical: boolean = false;
  public clockRotation$: BehaviorSubject<number> =
    this.timeService.clockRotation$;

  constructor(private timeService: TimeService) {}
}
