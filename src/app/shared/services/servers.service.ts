import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Server } from '../../servers/model/server';

@Injectable()
export class ServersService {

  serversChanged: Subject<Array<Server>>;
  private servers: Array<Server>;

  constructor() {
    this.serversChanged = new Subject<Array<Server>>();
    this.servers = [
      new Server('Localhost', '127.0.0.1', 9001)
    ];
  }

  setServers(servers: Server[]) {
    this.servers = servers;
    this.serversChanged.next(this.servers.slice());
  }

  getServers() {
    return this.servers.slice();
  }

  getServer(index: number) {
    return this.servers[index];
  }

  addServer(server: Server) {
    this.servers.push(server);
    this.serversChanged.next(this.servers.slice());
  }

  updateServer(index: number, server: Server) {
    this.servers[index] = server;
    this.serversChanged.next(this.servers.slice());
  }

  deleteServer(index: number) {
    this.servers.splice(index, 1);
    this.serversChanged.next(this.servers.slice());
  }
}
