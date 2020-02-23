import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFourteenPage } from './page-fourteen.page';

const routes: Routes = [
  {
    path: '',
    component: PageFourteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFourteenPageRoutingModule {}
