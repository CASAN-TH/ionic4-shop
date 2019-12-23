import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchHistoryPageRoutingModule } from './search-history-routing.module';

import { SearchHistoryPage } from './search-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchHistoryPageRoutingModule
  ],
  declarations: [SearchHistoryPage]
})
export class SearchHistoryPageModule {}
