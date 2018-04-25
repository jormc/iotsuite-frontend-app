import { Component, OnInit } from '@angular/core';
import { DashboardWidget, DashboardWidgetType, DashboardWidgetDataType } from '../model/dashboard-widget.model';
import { Server } from '../../servers/model/server';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  widgets: Array<DashboardWidget>;

  constructor() {

    this.widgets = [
      new DashboardWidget('Widget 1', '/test', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.TEXT, 0),
      new DashboardWidget('Widget 2', '/test', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.TEXT, 1),
      new DashboardWidget('Widget 3', '/test', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.TEXT, 1),
      new DashboardWidget('Widget 4', '/test', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.TEXT, 1),
      new DashboardWidget('Widget 5', '/test', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.TEXT, 1),
      new DashboardWidget('Widget 6', '/test', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.TEXT, 1)
    ];

  }

  ngOnInit() {
  }

}
