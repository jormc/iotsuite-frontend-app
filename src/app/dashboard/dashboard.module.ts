import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { ServersService } from '../servers/services/servers.service';
import { MqttService } from '../services/mqtt.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardWidgetComponent
  ],
  providers: [
    ServersService,
    MqttService
  ]
})
export class DashboardModule { }
