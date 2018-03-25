import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetTypeListComponent } from './widget-type-list/widget-type-list.component';
import { WidgetTypeEditComponent } from './widget-type-edit/widget-type-edit.component';
import { WidgetTypeDetailComponent } from './widget-type-detail/widget-type-detail.component';
import { WidgetTypeComponent } from './widget-type/widget-type.component';

const routes: Routes = [
  {
    path: 'widget-type',
    component: WidgetTypeComponent,
    children: [
      {
        path: 'list',
        component: WidgetTypeListComponent
      },
      {
        path: 'detail',
        component: WidgetTypeDetailComponent
      },
      {
        path: 'edit/:id',
        component: WidgetTypeEditComponent
      },
      {
        path: 'create',
        component: WidgetTypeEditComponent
      }]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class WidgetTypeRoutingModule { }
