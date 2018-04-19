import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  declarations: [PageNotFoundErrorComponent, GenericErrorComponent]
})
export class ErrorsModule { }
