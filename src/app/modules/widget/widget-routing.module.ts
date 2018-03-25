import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  {
    path: 'widget',
    component: WidgetComponent,
    children: [
      {
        path: 'list',
        component: WidgetListComponent
      },
      {
        path: 'detail',
        component: WidgetDetailComponent
      },
      {
        path: 'edit/:id',
        component: WidgetEditComponent
      },
      {
        path: 'create',
        component: WidgetEditComponent,
        data: { mode: 'create' }
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
export class WidgetRoutingModule { }
