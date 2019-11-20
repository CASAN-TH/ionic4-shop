import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegcreditPageRoutingModule } from './regcredit-routing.module';

import { RegcreditPage } from './regcredit.page';

import { MatStepperModule } from '@angular/material/stepper';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MatButtonModule,
    RegcreditPageRoutingModule
  ],
  declarations: [RegcreditPage]
})
export class RegcreditPageModule { }
