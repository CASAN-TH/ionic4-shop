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
import { MatTabsModule } from '@angular/material/tabs';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { FormsModule } from '@angular/forms';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ModalNicknameComponent } from './profile-setting/modal-nickname/modal-nickname.component';
import { ModalPhoneComponent } from './profile-setting/modal-phone/modal-phone.component';
import { ModalPasswordComponent } from './profile-setting/modal-password/modal-password.component';
import { ModalSocialComponent } from './profile-setting/modal-social/modal-social.component';

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
    SearchHistoryComponent,
    AddressListComponent,
    AddAddressComponent,
    ProfileSettingComponent,
    ModalNicknameComponent,
    ModalPhoneComponent,
    ModalPasswordComponent,
    ModalSocialComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MatTabsModule
  ],
  exports: [
    FavoriteSummaryComponent,
    SettingComponent,
    OrderSummaryComponent,
    AddAddressComponent,
    ProfileSettingComponent
  ],
  entryComponents: [
    WishListComponent,
    FollowedShopComponent,
    BrowseHistoryComponent,
    AboutComponent,
    LanguageComponent,
    OrderHistoryComponent,
    SearchHistoryComponent,
    AddressListComponent,
    ModalNicknameComponent,
    ModalPhoneComponent,
    ModalPasswordComponent,
    ModalSocialComponent
  ]
})
export class AccountModule { }
