import { Component, OnInit, Input } from '@angular/core';

import { DashboardWidget } from '../../../dto/dasboard-widget.dto';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.css']
})
export class DashboardWidgetComponent implements OnInit {

  @Input() widget: DashboardWidget;

  constructor() { }

  ngOnInit() {
  }

}
