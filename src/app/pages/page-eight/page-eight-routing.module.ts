import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEightPage } from './page-eight.page';

const routes: Routes = [
  {
    path: '',
    component: PageEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEightPageRoutingModule {}
