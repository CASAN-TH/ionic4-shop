import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentamountPageRoutingModule } from './currentamount-routing.module';

import { CurrentamountPage } from './currentamount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentamountPageRoutingModule
  ],
  declarations: [CurrentamountPage]
})
export class CurrentamountPageModule {}
