import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFivePage } from './page-five.page';

const routes: Routes = [
  {
    path: '',
    component: PageFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFivePageRoutingModule {}
