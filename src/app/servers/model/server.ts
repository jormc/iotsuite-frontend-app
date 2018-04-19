export enum ServerStatus {
    ONLINE = 1,
    OFFLINE = 0,
    UNKNOWN = -1
}

export class Server {

    id: string;
    name: string;
    host: string;
    port: number;
    status: ServerStatus;

    constructor(
        id: string,
        name: string,
        host: string,
        port: number
    ) {
        this.id = id;
        this.name = name;
        this.host = host;
        this.port = port;
        this.status = ServerStatus.UNKNOWN;
    }
}
