import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chap5PageRoutingModule } from './chap5-routing.module';

import { Chap5Page } from './chap5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chap5PageRoutingModule
  ],
  declarations: [Chap5Page]
})
export class Chap5PageModule {}
