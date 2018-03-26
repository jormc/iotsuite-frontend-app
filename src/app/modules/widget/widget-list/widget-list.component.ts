import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppModelService } from '../../../services/app-model.service';

import { Widget } from '../../../model/business-layer/entities/widget';
import { IWidgetService } from '../../../model/service-layer/api/i.widget.service';
import { PersistenceTechnology } from '../../../model/utils/model.utils';
import { WidgetService } from '../../../model/service-layer/impl/widget.service';
import { AlertService } from '../../../services/alert.service';
import { AlertDTO, AlertType } from '../../../dto/alert.dto';

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
    private alertService: AlertService,
    private appService: AppModelService,
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

  createWidget() {
    console.log('Create widget fired');
    this.router.navigate(['widget/create', {mode: 'create'}]);
  }

  editWidget(id: string) {
    console.log('Edit widget fired for id: ' + id);
  }

  deleteWidget(id) {
    console.log('Delete widget fired!');
    this.appService.getServiceManager()
    .getWidgetService().delete(id, PersistenceTechnology.LOCAL_STORAGE, localStorage).then(list => {
      this.widgets = list;
      this.alertService.addSuccessAlert('Success', 'Widget deleted successfully');
    });
  }

  deleteSelectedWidgets() {
    console.log('Delete selected widgets fired');
  }

}
