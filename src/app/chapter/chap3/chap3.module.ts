import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chap3PageRoutingModule } from './chap3-routing.module';

import { Chap3Page } from './chap3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chap3PageRoutingModule
  ],
  declarations: [Chap3Page]
})
export class Chap3PageModule {}
