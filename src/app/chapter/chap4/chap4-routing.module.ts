import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chap4Page } from './chap4.page';

const routes: Routes = [
  {
    path: '',
    component: Chap4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chap4PageRoutingModule {}
