import { IClientOptions, MqttClient } from 'mqtt';

export enum ServerStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    ERROR = 'error',
    UNKNOWN = 'unknown'
}

export enum ServerProtocol {
    WSS = 'wss',
    WS = 'ws',
    MQTT = 'mqtt',
    MQTTS = 'mqtts',
    TCP = 'tcp',
    SSL = 'ssl',
    WX = 'wx',
    WXS = 'wxs'
}

export class Server {

    name: string;
    host: string;
    port: number;
    status: ServerStatus;

    constructor(
        name: string,
        host: string,
        port: number
    ) {
        this.name = name;
        this.host = host;
        this.port = port;
        this.status = ServerStatus.UNKNOWN;
    }

}
