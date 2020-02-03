import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountPageRoutingModule } from './account-routing.module';
import { AccountPage } from './account.page';
// import { ProductlistPageModule } from '../productlist/productlist.module';
import { FavoriteSummaryComponent } from '../casan/account/favorite-summary/favorite-summary.component';
import { AccountModule } from '../casan/account/account.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    // ProductlistPageModule,
    AccountModule

  ],
  declarations: [AccountPage]
})
export class AccountPageModule { }
