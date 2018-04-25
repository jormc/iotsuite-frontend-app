import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DashboardWidget } from '../model/dashboard-widget.model';
import { ServersService } from '../../servers/services/servers.service';
import { Server } from '../../servers/model/server';
import { MqttClient } from 'mqtt';
import { MqttService } from '../../services/mqtt.service';

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
      console.log('Connected!');
    });

    this.client.on('reconnect', () => {
      console.log('reConnecting....');
    });

    this.client.on('error', () => {
      console.log('error');
    });

  }

  ngOnDestroy(): void {
    console.log('[ngOnDestroy]', 'Ending client connection');
    this.client.end();
  }

}
