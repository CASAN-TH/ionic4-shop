import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MePageRoutingModule } from './me-routing.module';
import { MePage } from './me.page';
import { AccountModule } from 'src/app/casan/account/account.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountModule,
    MePageRoutingModule
  ],
  declarations: [MePage]
})
export class MePageModule { }
