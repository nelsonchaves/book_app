import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTwelvePage } from './page-twelve.page';

const routes: Routes = [
  {
    path: '',
    component: PageTwelvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTwelvePageRoutingModule {}
