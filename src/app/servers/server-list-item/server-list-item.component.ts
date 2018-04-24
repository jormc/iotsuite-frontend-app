import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Server, ServerStatus } from '../model/server';
import { MqttClient } from 'mqtt';
import { MqttService } from '../../services/mqtt.service';

@Component({
  selector: 'app-server-list-item',
  templateUrl: './server-list-item.component.html',
  styleUrls: ['./server-list-item.component.scss']
})
export class ServerListItemComponent implements OnInit, OnDestroy {

  @Input()
  index: number;

  @Input()
  server: Server;

  client: MqttClient;

  maxConnectionRetries = 5;
  lastUpdate: number;
  connectRetries: number;

  constructor(private mqttService: MqttService) { }

  ngOnInit(): void {

    console.log('Started:', this.server.name);

    this.server.status = ServerStatus.CONNECTING;
    this.lastUpdate = Date.now();
    this.connectRetries = 0;
    this.maxConnectionRetries = 5;
    this.client = this.mqttService.connect(this.server);

    this.client.on('connect', () => {
      this.onConnect();
    });

    this.client.on('reconnect', () => {
      this.onReconnect();
    });

  }

  ngOnDestroy(): void {
    this.client.end();
  }

  private onConnect(): void {
    console.log('onConnect', this.server.name);
    this.lastUpdate = Date.now() - this.lastUpdate;
    this.server.status = ServerStatus.CONNECTED;
  }

  private onReconnect(): void {
    this.connectRetries += 1;

    console.log('onReconnect:', this.server.name, this.connectRetries);

    if (this.connectRetries >= this.maxConnectionRetries) {
      this.server.status = ServerStatus.ERROR;
      this.client.end();
    } else {
      this.server.status = ServerStatus.RECONNECTING;
    }

    this.lastUpdate = Date.now() - this.lastUpdate;
  }

}
