import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ],
  declarations: [
    WidgetsComponent,
    WidgetListComponent,
    WidgetEditComponent,
    WidgetDetailComponent
  ]
})
export class WidgetsModule { }
