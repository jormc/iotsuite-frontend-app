import { Component, OnInit } from '@angular/core';

import { OpenWeatherMapService } from '../../services/open-weather-map.service';

@Component({
  selector: 'app-weather-station',
  templateUrl: './weather-station.component.html',
  styleUrls: ['./weather-station.component.css']
})
export class WeatherStationComponent implements OnInit {

  weatherData = {};

  constructor(private weatherService: OpenWeatherMapService) { }

  ngOnInit() {
    const lat = 41.355;
    const lon = 2.071111;
    console.log('Your location: ' + lat + ' ' + lon);
    this.weatherService.getWeatherByLocation(lat, lon).subscribe(data => {
      console.log(data);
      this.weatherData = data;
    });
  }

}
