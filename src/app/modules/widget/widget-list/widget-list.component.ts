import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppService } from '../../../services/app.service';

import { Widget } from '../../../model/entities/widget';
import { IWidgetService } from '../../../model/service-layer/api/i.widget.service';
import { PersistenceTechnology } from '../../../model/utils/model.utils';
@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  routePath: string;
  pathParams: {};
  widgets: Widget[];
  closeResult: string;
  widgetService: IWidgetService;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private http: Http,
    private modalService: NgbModal) {
    this.routePath = this.router.url;
    this.widgets = [];
  }

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

  gotoCreate() {
    console.log('Create widget');
    const time = (new Date()).getMilliseconds();
    this.appService.getServiceManager()
      .getWidgetService().save(
        new Widget('Widget ' + time),
        PersistenceTechnology.LOCAL_STORAGE,
        localStorage
    );
    this.loadWidgets();
  }

  deleteSelected() {
    console.log('Delete selected');
  }
}
