import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallcenterPageRoutingModule } from './callcenter-routing.module';

import { CallcenterPage } from './callcenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallcenterPageRoutingModule
  ],
  declarations: [CallcenterPage]
})
export class CallcenterPageModule {}
