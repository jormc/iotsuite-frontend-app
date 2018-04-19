import { Component, OnInit, OnDestroy } from '@angular/core';

import { Server } from '../model/server';
import { ServerService } from '../services/ServersService';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit, OnDestroy {

  servers = [
    new Server('localhost', 'localhost', '127.0.0.1', 1883)
  ];

  timer: any;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.updateServersStatus();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  updateServersStatus() {
    this.timer = setTimeout(() => {
      for (const server of this.servers) {
        this.serverService.updateServerStatus(server);
      }
    }, 10000);
  }

}
