import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonenoPageRoutingModule } from './phoneno-routing.module';

import { PhonenoPage } from './phoneno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonenoPageRoutingModule
  ],
  declarations: [PhonenoPage]
})
export class PhonenoPageModule {}
