import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetModule } from './modules/widget/widget.module';
import { HttpModule } from '@angular/http';

import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    ErrorsModule,
    WidgetModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    // Debug all routes
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
