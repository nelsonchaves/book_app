import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNinePageRoutingModule } from './page-nine-routing.module';

import { PageNinePage } from './page-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNinePageRoutingModule
  ],
  declarations: [PageNinePage]
})
export class PageNinePageModule {}
