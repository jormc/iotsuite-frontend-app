import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MqttServerRoutingModule } from './mqtt-server-routing.module';
import { MqttServerListComponent } from './mqtt-server-list/mqtt-server-list.component';
import { MqttServerEditComponent } from './mqtt-server-edit/mqtt-server-edit.component';
import { MqttServerDetailComponent } from './mqtt-server-detail/mqtt-server-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MqttServerRoutingModule
  ],
  declarations: [MqttServerListComponent, MqttServerEditComponent, MqttServerDetailComponent]
})
export class MqttServerModule { }
