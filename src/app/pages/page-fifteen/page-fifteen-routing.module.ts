import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFifteenPage } from './page-fifteen.page';

const routes: Routes = [
  {
    path: '',
    component: PageFifteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFifteenPageRoutingModule {}
