import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertService } from './services/alert.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundErrorComponent } from './components/page-not-found-error/page-not-found-error.component';
import { AlertComponent } from './components/alert/alert.component';
import { TestComponent } from './components/test/test.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { DateComponent } from './components/date/date.component';
import { WeatherStationComponent } from './components/weather-station/weather-station.component';
import { WeatherUndergroundService } from './services/weather-underground.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundErrorComponent,
    AlertComponent,
    TestComponent,
    DigitalClockComponent,
    DateComponent,
    WeatherStationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    AlertService,
    WeatherUndergroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
