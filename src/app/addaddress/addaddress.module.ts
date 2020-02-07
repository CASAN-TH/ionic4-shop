import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddaddressPageRoutingModule } from './addaddress-routing.module';

import { AddaddressPage } from './addaddress.page';
import { AccountModule } from '../casan/account/account.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountModule,
    AddaddressPageRoutingModule
  ],
  declarations: [AddaddressPage]
})
export class AddaddressPageModule {}
