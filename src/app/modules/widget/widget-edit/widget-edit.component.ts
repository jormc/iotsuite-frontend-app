import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../../model/business-layer/entities/widget';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertDTO, AlertType } from '../../../dto/alert.dto';
import { AppModelService } from '../../../services/app-model/app-model.service';
import { Http } from '@angular/http';
import { PersistenceTechnology, ModelUtils, WidgetTypes } from '../../../model/utils/model.utils';
import { WidgetType } from '../../../model/business-layer/entities/widget-type';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  title: string;
  mode: string;
  create: boolean;
  widget: Widget;
  types: Array<WidgetType>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppModelService,
    private http: Http) { }

  ngOnInit() {
    this.title = 'Widget edit';
    this.create = false;
    this.route.params.subscribe(params => {
      this.mode = params['mode'];
      if (this.mode && this.mode !== undefined) {
        this.create = this.mode === 'create';
        this.widget = new Widget();
      }
    });
  }

  onCreateWidget() {
    this.appService.getServiceManager().getWidgetService().save(
      this.widget,
      PersistenceTechnology.LOCAL_STORAGE,
      localStorage
    );
    this.router.navigate(['/widget/list']);
  }

  onUpdateWidget() {
    this.appService.getServiceManager().getWidgetService().save(
      this.widget,
      PersistenceTechnology.LOCAL_STORAGE,
      localStorage
    );
  }
}
