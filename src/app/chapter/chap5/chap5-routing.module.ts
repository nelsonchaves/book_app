import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chap5Page } from './chap5.page';

const routes: Routes = [
  {
    path: '',
    component: Chap5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chap5PageRoutingModule {}
