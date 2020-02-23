import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEightPageRoutingModule } from './page-eight-routing.module';

import { PageEightPage } from './page-eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEightPageRoutingModule
  ],
  declarations: [PageEightPage]
})
export class PageEightPageModule {}
