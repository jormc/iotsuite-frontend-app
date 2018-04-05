import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found-error',
  templateUrl: './page-not-found-error.component.html',
  styleUrls: ['./page-not-found-error.component.css']
})
export class PageNotFoundErrorComponent implements OnInit {

  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
  }

}
