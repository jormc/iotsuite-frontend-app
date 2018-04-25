import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Server, ServerStatus } from '../model/server';
import { ServersService } from '../../shared/services/servers.service';
import { MqttService } from '../../shared/services/mqtt.service';

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
    private serversService: ServersService,
    private mqttService: MqttService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.serversService.serversChanged
      .subscribe(
        (servers: Array<Server>) => {
          this.servers = servers;
        }
      );
    this.servers = this.serversService.getServers();
  }

  ngOnDestroy(): void {
    console.log('[ngOnDestroy]', 'Disconnecting clients...');
    this.subscription.unsubscribe();
  }

  onNewServer(): void {
    console.log('[onNewServer]', 'Goto new server form');
    this.router.navigate(['servers', 'new']);
  }

}
