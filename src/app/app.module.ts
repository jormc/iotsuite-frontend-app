import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

import { AppModelService } from './services/app-model.service';
import { GeolocationService } from './services/geolocation.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ConfigComponent } from './modules/config/config/config.component';
import { ConfigWeatherServerComponent } from './modules/config/config-weather-server/config-weather-server.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AboutComponent } from './components/about/about.component';
import { AlertComponent } from './components/alert/alert.component';
import { OpenWeatherMapService } from './services/open-weather-map.service';
import { WeatherStationComponent } from './components/weather-station/weather-station.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogbookComponent,
    ConfigComponent,
    ConfigWeatherServerComponent,
    AboutComponent,
    AlertComponent,
    DigitalClockComponent,
    WeatherStationComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    DashboardModule
  ],
  providers: [
    AppModelService,
    GeolocationService,
    OpenWeatherMapService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
