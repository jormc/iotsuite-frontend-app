import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WidgetTypeRoutingModule } from './widget-type-routing.module';

import { WidgetTypeComponent } from './widget-type/widget-type.component';
import { WidgetTypeListComponent } from './widget-type-list/widget-type-list.component';
import { WidgetTypeEditComponent } from './widget-type-edit/widget-type-edit.component';
import { WidgetTypeDetailComponent } from './widget-type-detail/widget-type-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WidgetTypeRoutingModule
  ],
  declarations: [
    WidgetTypeComponent,
    WidgetTypeListComponent,
    WidgetTypeEditComponent,
    WidgetTypeDetailComponent
  ],
  exports: [
    WidgetTypeRoutingModule
  ]
})
export class WidgetTypeModule { }
