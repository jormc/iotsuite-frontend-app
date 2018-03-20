import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';
import { WidgetDeleteComponent } from './widget-delete/widget-delete.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetComponent,
    WidgetListComponent,
    WidgetEditComponent,
    WidgetDetailComponent,
    WidgetDeleteComponent
  ]
})
export class WidgetModule { }
