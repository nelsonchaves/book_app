import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFivePageRoutingModule } from './page-five-routing.module';

import { PageFivePage } from './page-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFivePageRoutingModule
  ],
  declarations: [PageFivePage]
})
export class PageFivePageModule {}
