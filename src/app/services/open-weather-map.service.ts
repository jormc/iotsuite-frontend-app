import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OpenWeatherMapService {

  apiKey: string;
  apiUrl: string;
  data: any;

  constructor(private httpClient: HttpClient) {
    this.apiKey = '1c0b0ee65d450f587f2067bdb8b3ee79';
    this.apiUrl = '/openweathermap';
    this.data = {};
  }

  getWeatherByLocation(lat: number, lon: number): Observable<any> {
    console.log('Searching weather data for ' + lat + ' ' + lon);
    const url = this.apiUrl + '?lat=' + lat + '&lon=' + lon + '&appid=' + this.apiKey;
    return this.httpClient.get(url);
  }

}
