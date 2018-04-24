import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerListComponent } from './server-list/server-list.component';
import { ServersComponent } from './servers/servers.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ServersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ServerListComponent
      },
      {
        path: 'new',
        component: ServerEditComponent
      },
      {
        path: ':id',
        component: ServerDetailComponent
      },
      {
        path: ':id/edit',
        component: ServerEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServersRoutingModule { }
