import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WidgetModule } from './modules/widget/widget.module';

import { LogbookComponent } from './components/logbook/logbook.component';
import { PageNotFoundComponent } from './modules/errors/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'logbook',
    component: LogbookComponent
  },
  {
    path: 'widget',
    loadChildren: 'app/modules/widget/widget.module#WidgetModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    WidgetModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
