import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public currentTime: string = '';

  constructor(private timeService: TimeService, public router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = this.timeService.getTime().slice(0, -3);
    }, 1000);

    console.log(this.router.url);
  }
}
