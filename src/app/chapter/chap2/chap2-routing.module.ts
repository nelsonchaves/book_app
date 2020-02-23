import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chap2Page } from './chap2.page';

const routes: Routes = [
  {
    path: '',
    component: Chap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chap2PageRoutingModule {}
