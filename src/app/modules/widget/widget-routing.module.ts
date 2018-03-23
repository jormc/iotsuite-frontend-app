import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

const routes: Routes = [
  {
    path: 'widget',
    component: WidgetListComponent
  },
  {
    path: 'widget/list',
    component: WidgetListComponent
  },
  {
    path: 'widget/detail',
    component: WidgetDetailComponent
  },
  {
    path: 'widget/edit/:id',
    component: WidgetEditComponent
  },
  {
    path: 'widget/create',
    component: WidgetEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class WidgetRoutingModule { }
