import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSixPage } from './page-six.page';

const routes: Routes = [
  {
    path: '',
    component: PageSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSixPageRoutingModule {}
