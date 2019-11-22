import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftsPageRoutingModule } from './gifts-routing.module';

import { GiftsPage } from './gifts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftsPageRoutingModule
  ],
  declarations: [GiftsPage]
})
export class GiftsPageModule {}
