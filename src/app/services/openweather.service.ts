import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OpenweatherService {

  apiUrl: string;
  data: any;

  constructor(private http: Http) {
    this.apiUrl = 'api.openweathermap.org/data/2.5/weather';
    this.data = {};
  }

}
