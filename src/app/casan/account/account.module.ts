import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteSummaryComponent } from './favorite-summary/favorite-summary.component';
import { WishListComponent } from './favorite-summary/wish-list/wish-list.component';
import { FollowedShopComponent } from './favorite-summary/followed-shop/followed-shop.component';
import { BrowseHistoryComponent } from './favorite-summary/browse-history/browse-history.component';
import { IonicModule } from '@ionic/angular';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderHistoryComponent } from './order-summary/order-history/order-history.component';
import { SearchHistoryComponent } from './order-summary/search-history/search-history.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BenefitSummaryComponent } from './benefit-summary/benefit-summary.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './benefit-summary/coupon/coupon.component';
import { CouponCenterComponent } from './benefit-summary/coupon-center/coupon-center.component';
import { CashBackComponent } from './benefit-summary/cash-back/cash-back.component';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { AboutAppComponent } from './system-setting/about-app/about-app.component';
import { LanguageComponent } from './system-setting/language/language.component';
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
    OrderSummaryComponent,
    OrderHistoryComponent,
    SearchHistoryComponent,
    BenefitSummaryComponent,
    CouponComponent,
    CouponCenterComponent,
    CashBackComponent,
    SystemSettingComponent,
    AboutAppComponent,
    LanguageComponent,

    
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
    OrderSummaryComponent,
    BenefitSummaryComponent,
    CouponComponent,
    CouponCenterComponent,
    CashBackComponent,
    SystemSettingComponent,

    OrderSummaryComponent,
    AddAddressComponent,
    ProfileSettingComponent
  ],
  entryComponents: [
    WishListComponent,
    FollowedShopComponent,
    BrowseHistoryComponent,
    OrderHistoryComponent,
    SearchHistoryComponent,
    CouponComponent,
    CouponCenterComponent,
    AboutAppComponent,
    LanguageComponent,



    AddAddressComponent,
    AddressListComponent,
    AddressListComponent,
    ModalNicknameComponent,
    ModalPhoneComponent,
    ModalPasswordComponent,
    ModalSocialComponent
  ]
}
)

export class AccountModule {}
