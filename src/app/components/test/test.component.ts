import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  dismissible: true;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  addSuccessAlert() {
    this.alertService.addSuccessAlert('Success alert', 'This is a sample success alert', this.dismissible);
  }

  addDangerAlert() {
    this.alertService.addDangerAlert('Danger alert', 'This is a sample danger alert', this.dismissible);
  }

  addWarningAlert() {
    this.alertService.addWarningAlert('Warning alert', 'This is a sample warning alert', this.dismissible);
  }

  addInfoAlert() {
    this.alertService.addInfoAlert('Info alert', 'This is a sample info alert', this.dismissible);
  }

  addPrimaryAlert() {
    this.alertService.addPrimaryAlert('Primary alert', 'This is a sample primary alert', this.dismissible);
  }

  addSecondaryAlert() {
    this.alertService.addSecondaryAlert('Secondary alert', 'This is a sample secondary alert', this.dismissible);
  }

  addLightAlert() {
    this.alertService.addLightAlert('Light alert', 'This is a sample light alert', this.dismissible);
  }

  addDarkAlert() {
    this.alertService.addDarkAlert('Dark alert', 'This is a sample dark alert', this.dismissible);
  }

}
