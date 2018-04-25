import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { DashboardWidget } from '../model/dashboard-widget.model';
import { MqttClient } from 'mqtt';
import { Server } from '../../servers/model/server';
import { ServersService } from '../../shared/services/servers.service';
import { MqttService } from '../../shared/services/mqtt.service';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss']
})
export class DashboardWidgetComponent implements OnInit, OnDestroy {


  @Input()
  widget: DashboardWidget;
  server: Server;
  client: MqttClient;

  constructor(
    private serversService: ServersService,
    private mqttService: MqttService) { }

  ngOnInit() {

    this.server = this.serversService.getServer(this.widget.serverId);

    console.log('Connecting to:', this.server.host, this.server.port);

    this.client = this.mqttService.connect(this.server);

    this.client.on('connect', () => {
      console.log(this.server.name, 'connected!');
      this.client.subscribe(this.widget.topic);
    });

    this.client.on('message', (topic, message) => {
      console.log('Message:', topic, message);
      this.widget.lastValue = message;
      this.widget.lastUpdate = Date.now();
    });

    this.client.on('reconnect', () => {
      console.log('reConnecting....');
    });

    this.client.on('error', () => {
      console.log('error');
    });

  }

  ngOnDestroy(): void {
    console.log('[ngOnDestroy]', 'Ending client connection for', this.server.name);
    this.client.unsubscribe(this.widget.topic);
    this.mqttService.disconnect(this.client);
  }

}
