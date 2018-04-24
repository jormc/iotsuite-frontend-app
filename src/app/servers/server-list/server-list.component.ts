import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Server, ServerStatus } from '../model/server';
import { ServerService } from '../services/ServerService';
import { MqttService } from '../../services/mqtt.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit, OnDestroy {

  servers: Array<Server>;
  subscription: Subscription;

  timer: any;

  constructor(
    private serverService: ServerService,
    private mqttService: MqttService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.serverService.serversChanged
      .subscribe(
        (servers: Array<Server>) => {
          this.servers = servers;
        }
      );
    this.servers = this.serverService.getServers();

    this.updateServerStatus();
  }

  ngOnDestroy(): void {

  }

  onNewServer(): void {
    console.log('onNewServer');
    this.router.navigate(['servers', 'new']);
  }

  updateServerStatus() {
    for (const server of this.servers) {
      try {
        const client = this.mqttService.connect(server);
        client.on('connect', () => {
          console.log('Client connected:', server.name);
        });
        client.on('reconnect', () => {
          console.log('Client reconnected:', server.name);
        });
        client.on('error', () => {
          console.log('Client connection error:', server.name);
        });
      } catch (e) {
        console.log('ERRROR:', e);
      }
    }
  }
}
