import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AlertDTO } from '../../dto/alert.dto';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  alerts: Array<AlertDTO>;
  closeTimeout = 3000;

  constructor(private alertService: AlertService) {
    this.alerts = new Array<AlertDTO>();
    this.alertService.onAlertAdded.subscribe(
      (alert: AlertDTO) => {
        this.alerts.push(alert);
        if (alert.dismissible) {
          this.autoCloseAlert(alert);
        }
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alertService.onAlertAdded.unsubscribe();
  }

  closeAlert(alert: AlertDTO) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  autoCloseAlert(alert: AlertDTO) {
    setTimeout(() => {
      this.closeAlert(alert);
    }, this.closeTimeout);
  }
}
