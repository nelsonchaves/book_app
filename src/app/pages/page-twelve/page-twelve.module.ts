import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTwelvePageRoutingModule } from './page-twelve-routing.module';

import { PageTwelvePage } from './page-twelve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTwelvePageRoutingModule
  ],
  declarations: [PageTwelvePage]
})
export class PageTwelvePageModule {}
