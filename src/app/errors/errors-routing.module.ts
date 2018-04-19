import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundErrorComponent } from './page-not-found-error/page-not-found-error.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';

const routes: Routes = [
  {
    path: 'error',
    component: GenericErrorComponent
  },
  {
    path: 'error/404',
    component: PageNotFoundErrorComponent
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
export class ErrorsRoutingModule { }
