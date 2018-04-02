import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogbookComponent } from './components/logbook/logbook.component';
import { ConfigComponent } from './components/config/config.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'logbook',
    component: LogbookComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
