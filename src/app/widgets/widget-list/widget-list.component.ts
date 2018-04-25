import { Component, OnInit } from '@angular/core';
import { Widget } from '../model/widget.model';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  widgets: Array<Widget>;

  constructor() {
    this.widgets = [
      new Widget('Widget 1'),
      new Widget('Widget 2'),
      new Widget('Widget 3'),
      new Widget('Widget 4'),
      new Widget('Widget 5')
    ];
  }

  ngOnInit() {
  }

}
