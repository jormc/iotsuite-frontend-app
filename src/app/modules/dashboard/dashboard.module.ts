import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { DigitalClockComponent } from '../../components/digital-clock/digital-clock.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardWidgetComponent,
    DigitalClockComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
