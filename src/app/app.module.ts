import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { AppModelService } from './services/app-model.service';
import { HttpModule } from '@angular/http';
import { ConfigComponent } from './components/config/config.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LogbookComponent,
    ConfigComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    DashboardModule
  ],
  providers: [
    AppModelService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
