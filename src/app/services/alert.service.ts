import { Injectable } from '@angular/core';
import { AlertDTO } from '../dto/alert.dto';
import { AlertType } from '../enums/alert-type.enum';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  onAlertAdded: Subject<AlertDTO>;

  constructor() {
    this.onAlertAdded = new Subject<AlertDTO>();
  }

  addAlert(alert: AlertDTO) {
    this.onAlertAdded.next(alert);
  }

  addSuccessAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.SUCCESS, title, message, closeable));
  }

  addDangerAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.DANGER, title, message, closeable));
  }

  addWarningAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.WARNING, title, message, closeable));
  }

  addInfoAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.INFO, title, message, closeable));
  }

  addPrimaryAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.PRIMARY, title, message, closeable));
  }

  addSecondaryAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.SECONDARY, title, message, closeable));
  }

  addLightAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.LIGHT, title, message, closeable));
  }

  addDarkAlert(title: string, message: string, closeable: boolean = true) {
    this.onAlertAdded.next(new AlertDTO(AlertType.DARK, title, message, closeable));
  }

}
