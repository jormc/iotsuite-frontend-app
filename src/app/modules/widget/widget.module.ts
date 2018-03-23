import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetRoutingModule
  ],
  declarations: [
    WidgetListComponent,
    WidgetEditComponent,
    WidgetComponent,
    WidgetDetailComponent
  ],
  exports: [
    WidgetRoutingModule
  ]
})
export class WidgetModule { }
