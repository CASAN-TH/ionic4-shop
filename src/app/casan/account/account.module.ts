import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteSummaryComponent } from './favorite-summary/favorite-summary.component';
import { WishListComponent } from './favorite-summary/wish-list/wish-list.component';
import { FollowedShopComponent } from './favorite-summary/followed-shop/followed-shop.component';
import { BrowseHistoryComponent } from './favorite-summary/browse-history/browse-history.component';
import { IonicModule } from '@ionic/angular';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './setting/about/about.component';
import { LanguageComponent } from './setting/language/language.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderHistoryComponent } from './order-summary/order-history/order-history.component';
import { SearchHistoryComponent } from './order-summary/search-history/search-history.component';







@NgModule({
  declarations: [
    WishListComponent,
    FollowedShopComponent,
    BrowseHistoryComponent,
    FavoriteSummaryComponent,
    SettingComponent,
    AboutComponent,
    LanguageComponent,
    OrderSummaryComponent,
    OrderHistoryComponent,
    SearchHistoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FavoriteSummaryComponent,
    SettingComponent,
    OrderSummaryComponent
  ],
  entryComponents:[
    WishListComponent,
    FollowedShopComponent,
    BrowseHistoryComponent,
    AboutComponent,
    LanguageComponent,
    OrderHistoryComponent,
    SearchHistoryComponent
  ]
})
export class AccountModule { }
