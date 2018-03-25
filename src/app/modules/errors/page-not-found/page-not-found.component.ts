import { Component, OnInit, Input } from '@angular/core';

import { AlertDTO, AlertType } from '../../../dto/alert.dto';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  alert: AlertDTO;

  constructor() {

    this.alert = new AlertDTO(
      AlertType.DANGER,
      'Page not found',
      'The page that you\'re looking for doesn\'t exists',
      false
    );

  }

  ngOnInit() {

  }

}
