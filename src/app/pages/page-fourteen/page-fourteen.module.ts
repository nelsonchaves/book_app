import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFourteenPageRoutingModule } from './page-fourteen-routing.module';

import { PageFourteenPage } from './page-fourteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFourteenPageRoutingModule
  ],
  declarations: [PageFourteenPage]
})
export class PageFourteenPageModule {}
