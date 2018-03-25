import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AlertDTO, AlertType } from '../../dto/alert.dto';
import { AlertService } from '../../services/alert/alert.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  providers: [ AlertService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  closeTimeout = 3000;

  constructor(private alertsService: AlertService) { }

  ngOnInit() {

  }

  addAlert(alert: AlertDTO) {
    this.autoCloseAlert(alert);
  }

  closeAlert(alert: AlertDTO) {

  }

  autoCloseAlert(alert: AlertDTO) {
    setTimeout(() => {
      this.closeAlert(alert);
    }, this.closeTimeout);
  }
}
