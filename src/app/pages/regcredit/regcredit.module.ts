import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegcreditPageRoutingModule } from './regcredit-routing.module';

import { RegcreditPage } from './regcredit.page';

import { MatStepperModule } from '@angular/material/stepper';

import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MatButtonModule,
    MatDialogModule,
    RegcreditPageRoutingModule
  ],
  declarations: [RegcreditPage]
})
export class RegcreditPageModule { }
