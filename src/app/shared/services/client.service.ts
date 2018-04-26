import { Subject } from 'rxjs/Subject';

import * as mqtt from 'mqtt';
import { MqttClient, IClientOptions } from 'mqtt';

import { Server } from '../../servers/model/server';


export class Client {

    server: Server;
    client: MqttClient;
    options: IClientOptions;

    onConnect: Subject<any>;
    onDisconnect: Subject<any>;

    constructor(server: Server) {
        this.server = server;
    }

    connect() {
        this.client = mqtt.connect(this.options);

        this.client.on('connect', () => {

        });
    }

    disconnect() {
        if (this.client) {
            this.client.end();
        }
        this.onDisconnect.complete();
    }

    private getClientOptions(): IClientOptions {
        const clientOptions: IClientOptions = {
            host: this.server.host,
            port: this.server.port,
            protocol: this.server.protocol || 'mqtt',
            reconnectPeriod: 15000,
            connectTimeout: 10000,
            keepalive: 15000
        };
        return clientOptions;
    }

}
