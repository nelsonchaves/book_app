import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chap2PageRoutingModule } from './chap2-routing.module';

import { Chap2Page } from './chap2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chap2PageRoutingModule
  ],
  declarations: [Chap2Page]
})
export class Chap2PageModule {}
