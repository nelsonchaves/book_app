import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageElevenPageRoutingModule } from './page-eleven-routing.module';

import { PageElevenPage } from './page-eleven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageElevenPageRoutingModule
  ],
  declarations: [PageElevenPage]
})
export class PageElevenPageModule {}
