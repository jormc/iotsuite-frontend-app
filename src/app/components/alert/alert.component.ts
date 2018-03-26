import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AlertDTO, AlertType } from '../../dto/alert.dto';
import { AlertService } from '../../services/alert.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: AlertDTO[] = [];
  closeTimeout = 3000;

  constructor(private alertsService: AlertService) {
    this.alertsService.alertAdded.subscribe(
      (alert: AlertDTO) => {
        this.addAlert(alert);
      }
    );
  }

  ngOnInit() {

  }

  addAlert(alert: AlertDTO) {
    console.log('New alert has been added!');
    this.alerts.push(alert);
    this.autoCloseAlert(alert);
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
