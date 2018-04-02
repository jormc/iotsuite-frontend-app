import { Component, OnInit } from '@angular/core';
import { DashboardWidget, WidgetSize, WidgetType, WidgetStatus } from '../../../dto/dasboard-widget.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  widgets: Array<DashboardWidget>;

  constructor() {
    this.widgets = new Array<DashboardWidget>();
  }

  ngOnInit() {

    this.widgets.push({
      name: 'Sensor 001',
      size: WidgetSize.SINGLE,
      status: WidgetStatus.ENABLED,
      type: WidgetType.SENSOR,
      value: '23,5',
      unit: 'ºC',
      color: 'red'
    });

    this.widgets.push({
      name: 'Sensor 002',
      size: WidgetSize.SINGLE,
      status: WidgetStatus.ENABLED,
      type: WidgetType.SENSOR,
      value: '23,5',
      unit: 'ºC',
      color: 'red'
    });

    this.widgets.push({
      name: 'Sensor 003',
      size: WidgetSize.SINGLE,
      status: WidgetStatus.ENABLED,
      type: WidgetType.SENSOR,
      value: '23,5',
      unit: 'ºC',
      color: 'red'
    });

    this.widgets.push({
      name: 'Sensor 004',
      size: WidgetSize.SINGLE,
      status: WidgetStatus.ENABLED,
      type: WidgetType.SENSOR,
      value: '23,5',
      unit: 'ºC',
      color: 'red'
    });

    this.widgets.push({
      name: 'Sensor 005',
      size: WidgetSize.SINGLE,
      status: WidgetStatus.ENABLED,
      type: WidgetType.SENSOR,
      value: '23,5',
      unit: 'ºC',
      color: 'red'
    });
  }

}
