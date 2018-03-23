import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { WidgetModule } from './modules/widget/widget.module';

import { AppComponent } from './app.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';

import { AppService } from './services/app.service';
import { ClockComponent } from './components/clock/clock.component';
import { DateComponent } from './components/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    LogbookComponent,
    HomeComponent,
    PageNotFoundComponent,
    ClockComponent,
    DateComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    WidgetModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
