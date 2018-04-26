import { IClientOptions, MqttClient } from 'mqtt';

export enum ServerStatus {
    CONNECTED = 'connected',
    ERROR = 'error',
    CONNECTING = 'connectting',
    RECONNECTING = 'reconnecting',
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

    /* ########################## */
    /* 'some' mqtt.IClientOptions */
    host: string;
    port: number;
    path: string;
    protocol: ServerProtocol;
    keepalive: number;
    clientId: string;
    protocolId: string;
    protocolVersion: string;
    clean: boolean;
    reconnectPeriod: number;
    connectTimeout: number;
    username: string;
    password: string;
    incomingStore: string;
    outgoingStore: string;
    queueQoSZero: boolean;
    reschedulePings: boolean;
    resubscribe: boolean;
    /* ########################## */

    status: ServerStatus;
    lastConnection: number;
    connectionRetries: number;
    maxConnectionRetries: number;

    constructor(
        name: string,
        host: string,
        port: number
    ) {
        this.name = name;
        this.host = host;
        this.port = port;
        this.protocol = ServerProtocol.MQTT;
        this.status = ServerStatus.UNKNOWN;
    }

}
