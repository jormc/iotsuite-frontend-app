import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { WidgetsModule } from './modules/widgets/widgets.module';

import { AppComponent } from './app.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';

import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    LogbookComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    WidgetsModule,
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
