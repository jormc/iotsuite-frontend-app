import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigWeatherServerComponent } from './config-weather-server/config-weather-server.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule
  ],
  declarations: [ConfigWeatherServerComponent, ConfigComponent]
})
export class ConfigModule { }
