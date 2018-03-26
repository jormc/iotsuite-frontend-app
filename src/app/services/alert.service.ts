import { Injectable, EventEmitter } from '@angular/core';
import { AlertDTO, AlertType } from '../dto/alert.dto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertService {

  alerts: AlertDTO[] = [];
  alertAdded = new EventEmitter<AlertDTO>();

  constructor() { }

  addAlert(alert: AlertDTO) {
    this.alertAdded.emit(alert);
  }

  addSuccessAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.SUCCESS, title, message, closeable));
  }

  addDangerAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.DANGER, title, message, closeable));
  }

  addWarningAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.WARNING, title, message, closeable));
  }

  addInfoAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.INFO, title, message, closeable));
  }

  addPrimaryAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.PRIMARY, title, message, closeable));
  }

  addSecondaryAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.SECONDARY, title, message, closeable));
  }

  addLightAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.LIGHT, title, message, closeable));
  }

  addDarkAlert(title: string, message: string, closeable: boolean = true)  {
    this.alertAdded.emit(new AlertDTO(AlertType.DARK, title, message, closeable));
  }

}
