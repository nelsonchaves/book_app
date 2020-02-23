import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chap1Page } from './chap1.page';

const routes: Routes = [
  {
    path: '',
    component: Chap1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chap1PageRoutingModule {}
