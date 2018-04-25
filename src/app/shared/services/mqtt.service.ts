import { Injectable } from '@angular/core';

import * as mqtt from 'mqtt';
import { MqttClient, IClientOptions } from 'mqtt';

import { Server } from '../../servers/model/server';

@Injectable()
export class MqttService {

  constructor() { }

  connect(server: Server): MqttClient {
    const client = mqtt.connect(this.getClientOpntions(server));
    return client;
  }

  disconnect(client: MqttClient): void {
    client.end();
  }

  private getClientOpntions(server: Server): IClientOptions {
    const clientOptions: IClientOptions = {
      host: server.host,
      port: server.port,
      protocol: 'mqtt',
      reconnectPeriod: 15000,
      connectTimeout: 10000,
      keepalive: 15000
    };
    return clientOptions;
  }
}
