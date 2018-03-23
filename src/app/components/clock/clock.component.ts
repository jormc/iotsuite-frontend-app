import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  now: string;
  hours: string;
  minutes: string;
  seconds: string;
  dots: string;

  constructor() {
    this.now = '000000';
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
    this.dots = ':';
   }

  ngOnInit() {
    const timeoutId = setInterval(() => {
      const time = new Date();
      this.hours = ('0' + time.getHours()).substr(-2);
      this.minutes = ('0' + time.getMinutes()).substr(-2);
      this.seconds = ('0' + time.getSeconds()).substr(-2);
    }, 1000);
  }

}
