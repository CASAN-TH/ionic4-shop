import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpcenterPageRoutingModule } from './helpcenter-routing.module';

import { HelpcenterPage } from './helpcenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpcenterPageRoutingModule
  ],
  declarations: [HelpcenterPage]
})
export class HelpcenterPageModule {}
