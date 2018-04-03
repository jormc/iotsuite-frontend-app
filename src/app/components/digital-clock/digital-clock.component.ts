import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  hours: string;
  minutes: string;
  seconds: string;
  dots: string;
  showDots: boolean;

  weatherData: {};

  constructor() {
    this.hours = String.fromCharCode(198, 198);
    this.minutes = String.fromCharCode(198, 198);
    this.seconds = String.fromCharCode(198, 198);
    this.dots = ':';
    this.showDots = true;
  }

  ngOnInit() {

    const timeoutId = setInterval(() => {
      const time = new Date();
      this.hours = ('0' + time.getHours()).substr(-2);
      this.minutes = ('0' + time.getMinutes()).substr(-2);
      this.seconds = ('0' + time.getSeconds()).substr(-2);
      this.showDots = !this.showDots;
      if (this.showDots === true) {
        this.dots = ':';
      } else {
        this.dots = '';
      }
    }, 1000);
  }

}
