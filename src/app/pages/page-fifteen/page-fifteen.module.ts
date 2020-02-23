import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFifteenPageRoutingModule } from './page-fifteen-routing.module';

import { PageFifteenPage } from './page-fifteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFifteenPageRoutingModule
  ],
  declarations: [PageFifteenPage]
})
export class PageFifteenPageModule {}
