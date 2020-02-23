import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageElevenPage } from './page-eleven.page';

const routes: Routes = [
  {
    path: '',
    component: PageElevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageElevenPageRoutingModule {}
