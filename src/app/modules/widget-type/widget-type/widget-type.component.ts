import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-type',
  templateUrl: './widget-type.component.html',
  styleUrls: ['./widget-type.component.css']
})
export class WidgetTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/widget-type/list']);
  }

}
