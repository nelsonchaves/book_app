import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSixPageRoutingModule } from './page-six-routing.module';

import { PageSixPage } from './page-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSixPageRoutingModule
  ],
  declarations: [PageSixPage]
})
export class PageSixPageModule {}
