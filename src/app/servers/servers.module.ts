import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ServersRoutingModule } from './servers-routing.module';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { ServersComponent } from './servers/servers.component';
import { ServerListItemComponent } from './server-list-item/server-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ServersRoutingModule
  ],
  declarations: [
    ServerListComponent,
    ServerEditComponent,
    ServerDetailComponent,
    ServersComponent,
    ServerListItemComponent
  ]
})
export class ServersModule { }
