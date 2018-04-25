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
      new DashboardWidget('Widget 1', '/system/core/0/temp', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.NUMBER, 0),
      new DashboardWidget('Widget 2', '/system/core/1/temp', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.NUMBER, 0),
      new DashboardWidget('Widget 2', '/test/switch', DashboardWidgetType.OUTPUT, DashboardWidgetDataType.BOOLEAN, 0)
    ];

  }

  ngOnInit() {
  }

}
