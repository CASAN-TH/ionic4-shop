import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HomePageRoutingModule,
    MatTabsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
