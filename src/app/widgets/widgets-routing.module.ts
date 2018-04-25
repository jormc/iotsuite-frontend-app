import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    children: [
      {
        path: '',
        component: WidgetListComponent
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
export class WidgetsRoutingModule { }
