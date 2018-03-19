import { Component, OnInit } from '@angular/core';

import { Widget } from '../../../model/entities/widget';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets: Widget[];

  constructor() {

    this.widgets = [];
    for (let w = 0; w < 5; w++) {
      this.widgets.push(new Widget('Widget ' + w));
    }

  }

  ngOnInit() {
  }

}
