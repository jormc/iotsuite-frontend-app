import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class CoreModule { }
