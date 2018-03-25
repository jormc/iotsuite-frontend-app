import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { WidgetModule } from './modules/widget/widget.module';
import { WidgetTypeModule } from './modules/widget-type/widget-type.module';

import { AppComponent } from './app.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';

import { AppModelService } from './services/app-model/app-model.service';
import { ClockComponent } from './components/clock/clock.component';
import { DateComponent } from './components/date/date.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LogbookComponent,
    HomeComponent,
    PageNotFoundComponent,
    ClockComponent,
    DateComponent,
    NavbarComponent,
    SidebarComponent,
    AlertComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    WidgetModule,
    WidgetTypeModule,
    AppRoutingModule
  ],
  providers: [
    AppModelService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
