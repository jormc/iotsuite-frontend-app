import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home/home.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ConfigComponent } from './modules/config/config/config.component';
import { WidgetListComponent } from './modules/widget/widget-list/widget-list.component';
import { WidgetEditComponent } from './modules/widget/widget-edit/widget-edit.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'config',
        component: ConfigComponent
      },
      {
        path: 'logbook',
        component: LogbookComponent
      },
      {
        path: 'widgets',
        component: WidgetListComponent,
        children: [
          {
            path: 'create',
            component: WidgetEditComponent
          }
        ]
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule {

}
