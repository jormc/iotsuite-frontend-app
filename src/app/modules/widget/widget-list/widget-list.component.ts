import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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

  widgets: Widget[];
  closeResult: string;
  widgetService: IWidgetService;

  constructor(private appService: AppService, private http: Http, private modalService: NgbModal) {

    this.widgets = [];

    /* for (let w = 0; w < 5; w++) {
      this.appService.getServiceManager()
        .getWidgetService().save(
          new Widget('Widget ' + w),
          PersistenceTechnology.LOCAL_STORAGE,
          localStorage
        );
    } */

    this.appService.getServiceManager().getWidgetService().findAll(PersistenceTechnology.LOCAL_STORAGE, localStorage).then(data => {
      this.widgets = data;
    });

  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openConfirmDelete(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
