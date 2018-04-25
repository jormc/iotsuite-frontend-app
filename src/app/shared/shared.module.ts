import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttService } from './services/mqtt.service';
import { ServersService } from './services/servers.service';

@NgModule({
  declarations: [
  ],
  providers: [
    MqttService,
    ServersService
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule {}
