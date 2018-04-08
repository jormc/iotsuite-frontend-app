import { Component, OnInit } from '@angular/core';
import { WeatherUndergroundService } from '../../services/weather-underground.service';

@Component({
  selector: 'app-weather-station',
  templateUrl: './weather-station.component.html',
  styleUrls: ['./weather-station.component.css']
})
export class WeatherStationComponent implements OnInit {

  dateFormat: string;
  clockFormat: string;
  weatherData: any;

  icon: string;

  constructor(private weatherService: WeatherUndergroundService) {
    this.clockFormat = 'HH:mm:ss';
    this.dateFormat = 'dd/MM/yyyy';
   }

  ngOnInit() {
    this.weatherData = this.weatherService.getConditions();
    console.log(this.weatherData);
  }

}
