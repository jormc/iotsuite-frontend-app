import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ClockConfig } from './clock-config';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit, OnDestroy {

  @Input() config: ClockConfig;
  clock: string;
  clockFormat: string;
  date: string;
  dateFormat: string;

  clockInterval: any;

  pipe: DatePipe;
  upperCasePipe: UpperCasePipe;

  constructor() {

    console.log(this.config);

    if (!this.config) {
      this.config = {
        clockFormat: 'hh:MM:ss',
        dateFormat: 'dd/mm/yyyy'
      };
    }
  }

  ngOnInit() {

    this.pipe = new DatePipe('en-US');
    this.upperCasePipe = new UpperCasePipe();

    this.clockInterval = setInterval(() => {
      const now = Date.now();
      this.clock = this.pipe.transform(now, this.config.clockFormat);
      this.date = this.upperCasePipe.transform(this.pipe.transform(now, this.config.dateFormat));
    }, 100);

  }

  ngOnDestroy(): void {
    clearInterval(this.clockInterval);
  }
}
