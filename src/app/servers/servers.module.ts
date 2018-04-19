import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';

import { ServerListComponent } from './server-list/server-list.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { ServersComponent } from './servers/servers.component';
import { ServerService } from './services/ServersService';

@NgModule({
  imports: [
    CommonModule,
    ServersRoutingModule
  ],
  declarations: [
    ServerListComponent,
    ServerEditComponent,
    ServerDetailComponent,
    ServersComponent
  ],
  providers: [
    ServerService
  ]
})
export class ServersModule { }
