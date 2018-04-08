import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class WeatherUndergroundService {

  maxTTL: number;  // 30 minutes

  apiKey: string;
  url: string;
  response: {
    time: number,
    data: any
  };

  constructor(private httpClient: HttpClient) {
    this.maxTTL = 1800000;
    this.apiKey = '1ba5b5b313645c2b';
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/CA/San_Francisco.json';
  }

  getConditions(): any {
    const now = Date.now();
    this.response = JSON.parse(localStorage.getItem('weather-data'));
    let dataTTL = now;

    if (this.response && this.response.time) {
      dataTTL = now - this.response.time;
    }

    if (dataTTL <= this.maxTTL) {
      return this.response.data;
    } else {
      this.httpClient.get(this.url).subscribe(
        (weatherData: Response) => {
          this.response = {
            time: Date.now(),
            data: weatherData
          };
          localStorage.setItem('weather-data', JSON.stringify(this.response));
          return weatherData;
        }
      );
    }
  }

}
