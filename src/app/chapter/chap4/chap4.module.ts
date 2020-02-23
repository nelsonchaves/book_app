import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chap4PageRoutingModule } from './chap4-routing.module';

import { Chap4Page } from './chap4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chap4PageRoutingModule
  ],
  declarations: [Chap4Page]
})
export class Chap4PageModule {}
