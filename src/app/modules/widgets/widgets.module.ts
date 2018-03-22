import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ],
  declarations: [WidgetListComponent, WidgetEditComponent, WidgetComponent, WidgetDetailComponent]
})
export class WidgetsModule { }
