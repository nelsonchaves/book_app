import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chap3Page } from './chap3.page';

const routes: Routes = [
  {
    path: '',
    component: Chap3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chap3PageRoutingModule {}
