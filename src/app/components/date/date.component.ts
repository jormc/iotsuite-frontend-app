import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnDestroy {

  @Input() dateFormat: string;
  @Input() capitalize: boolean;

  date: string;
  dateInterval: any;

  pipe: DatePipe;
  upperCasePipe: UpperCasePipe;

  constructor() { }

  ngOnInit() {
    this.pipe = new DatePipe('en-US');
    this.dateInterval = setInterval(() => {
      this.date = this.pipe.transform(Date.now(), this.dateFormat);
      if (this.capitalize) {
        this.date = this.upperCasePipe.transform(this.date);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.dateInterval);
  }

}
