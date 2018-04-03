import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeolocationService {

  constructor() { }

  getLocation(): Observable<Position> {
    console.log('getLocation');

    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('Position: ' + position);
            observer.next(position);
            observer.complete();
          },
          (error) => {
            console.log('Error: ' + error);
            observer.error(error);
          }
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }

}
