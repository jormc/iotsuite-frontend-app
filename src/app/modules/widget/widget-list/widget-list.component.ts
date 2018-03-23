import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppService } from '../../../services/app.service';

import { Widget } from '../../../model/entities/widget';
import { IWidgetService } from '../../../model/service-layer/api/i.widget.service';
import { PersistenceTechnology } from '../../../model/utils/model.utils';
import { WidgetService } from '../../../model/service-layer/impl/widget.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets: Widget[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private http: Http
  ) { }

  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.appService.getServiceManager().getWidgetService().findAll(PersistenceTechnology.LOCAL_STORAGE, localStorage)
      .then(data => {
        this.widgets = data;
      }
    );
  }

  addWidget() {
    console.log('Create widget fired');

      // const time = (new Date()).getMilliseconds();
      // this.appService.getServiceManager()
      //   .getWidgetService().save(
      //     new Widget('Widget ' + time),
      //     PersistenceTechnology.LOCAL_STORAGE,
      //     localStorage
      // );
      // this.loadWidgets();

    this.router.navigate(['widget/create']);
  }

  editWidget(id: string) {
    console.log('Edit widget fired for id: ' + id);
  }

  deleteWidget(id) {
    console.log('Delete widget fired!');
    this.appService.getServiceManager()
    .getWidgetService().delete(id, PersistenceTechnology.LOCAL_STORAGE, localStorage).then(list => {
      this.widgets = list;
    });
  }

  deleteSelectedWidgets() {
    console.log('Delete selected widgets fired');
  }

}
