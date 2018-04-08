import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';
import { ClockConfig } from '../digital-clock/clock-config';
import { AlertDTO } from '../../dto/alert.dto';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  alert: AlertDTO;

  clockConfig: ClockConfig = {
    clockFormat: 'hh:MM:ss',
    dateFormat: 'LLLL dd, yyyy'
  };

  constructor(private alertService: AlertService) {
    this.alert = {
      type: null,
      title: null,
      message: null,
      dismissible: true
    };
   }

  ngOnInit() {
  }

  addSuccessAlert() {
    this.alertService.addSuccessAlert(
      this.alert.title || 'Success alert',
      this.alert.message || 'This is a sample success alert',
      this.alert.dismissible
    );
  }

  addDangerAlert() {
    this.alertService.addDangerAlert(
      this.alert.title || 'Danger alert',
      this.alert.message || 'This is a sample danger alert',
      this.alert.dismissible
    );
  }

  addWarningAlert() {
    this.alertService.addWarningAlert(
      this.alert.title || 'Warning alert',
      this.alert.message || 'This is a sample warning alert',
      this.alert.dismissible
    );
  }

  addInfoAlert() {
    this.alertService.addInfoAlert(
      this.alert.title || 'Info alert',
      this.alert.message || 'This is a sample info alert',
      this.alert.dismissible
    );
  }

  addPrimaryAlert() {
    this.alertService.addPrimaryAlert(
      this.alert.title || 'Primary alert',
      this.alert.message || 'This is a sample primary alert',
      this.alert.dismissible
    );
  }

  addSecondaryAlert() {
    this.alertService.addSecondaryAlert(
      this.alert.title || 'Secondary alert',
      this.alert.message || 'This is a sample secondary alert',
      this.alert.dismissible
    );
  }

  addLightAlert() {
    this.alertService.addLightAlert(
      this.alert.title || 'Light alert',
      this.alert.message || 'This is a sample light alert',
      this.alert.dismissible
    );
  }

  addDarkAlert() {
    this.alertService.addDarkAlert(
      this.alert.title || 'Dark alert',
      this.alert.message || 'This is a sample dark alert',
      this.alert.dismissible
    );
  }

}
