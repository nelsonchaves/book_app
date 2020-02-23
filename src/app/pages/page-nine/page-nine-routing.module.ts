import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNinePage } from './page-nine.page';

const routes: Routes = [
  {
    path: '',
    component: PageNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNinePageRoutingModule {}
