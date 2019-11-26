import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  accountDataList: any;
  accountData: any;
  promotionData: any;

  constructor(private router: Router, private accountService : AccountService) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  ngOnInit() {
    this.accountService.onAccountDataListChanged.subscribe((accountDataList:any)=>{
      console.log(accountDataList);
      this.accountDataList = accountDataList;
    })
    this.accountService.onAccountData2Changed.subscribe((accountData)=>{
      console.log(accountData);
      this.accountData = accountData;
    })
    this.accountService.onPromotionChanged.subscribe((promotionData)=>{
      console.log(promotionData);
      this.promotionData = promotionData;
    })
  }

  onToMePage() {
    this.router.navigate(['me']);
  }

  onToLoginPage() {
    console.log("onToLoginPage");
  }

  onToMessagePage() {
    console.log("onToMessagePage");
  }

  onToSettingPage() {
    console.log("onToSettingPage");
  }

  onToWishlistPage() {
    console.log("onToWishlistPage");
  }

  onToFollowedShopPage() {
    console.log("onToFollowedShopPage");
  }

  onToBrowseHistoryPage() {
    console.log("onToBrowseHistoryPage");
  }

  onToViellAllMyOrdersPage() {
    console.log("onToViellAllMyOrdersPage");
  }

  onToPayViellAllMyOrdersPage() {
    console.log("onToPayViellAllMyOrdersPage");
  }

  onToShipViellAllMyOrdersPage() {
    console.log("onToShipViellAllMyOrdersPage");
  }

  onToRecieveViellAllMyOrdersPage() {
    console.log("onToRecieveViellAllMyOrdersPage");
  }

  onToReviewsViellAllMyOrdersPage(){
    console.log("onToReviewsViellAllMyOrdersPage");
  }

  onToViewAllMyBills() {
    console.log("onToViewAllMyBills");
  }

  onToCreditPage() {
    console.log("onToCreditPage");
  }

  onToMyCouponPage() {
    console.log("onToMyCouponPage");
  }

  onToTcoinPage() {
    console.log("onToTcoinPage");
  }

  onToCurrentAmountPage() {
    console.log("onToCurrentAmountPage");
  }

  onToHelpCenterPage() {
    console.log("onToHelpCenterPage");
  }

  onToCuustomerServicePage() {
    console.log("onToCuustomerServicePage");
  }

  onToLanguagesPage() {
    console.log("onToLanguagesPage");
  }

  onToShippingAddressPage() {
    console.log("onToShippingAddressPage");
  }

  onToPromotion(item) {
    console.log(item);
    if(item==="Tcoin Mall"){
      console.log('go to Tcoin Mall Page');
    }
    if(item==="Cash Reward"){
      console.log('go to Cash Reward Page');
    }
    if(item==="Super Discount"){
      console.log('go to Super Discount Page');
    }
    if(item==="Coupon Center"){
      console.log('go to Coupon Center Page');
    }
    

    
  }


}
