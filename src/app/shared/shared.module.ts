import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MqttService } from './services/mqtt.service';
import { ServersService } from './services/servers.service';

@NgModule({
  declarations: [
  ],
  imports: [
    NgbModule.forRoot()
  ],
  providers: [
    MqttService,
    ServersService
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
