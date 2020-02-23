import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chap1PageRoutingModule } from './chap1-routing.module';

import { Chap1Page } from './chap1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chap1PageRoutingModule
  ],
  declarations: [Chap1Page]
})
export class Chap1PageModule {}
