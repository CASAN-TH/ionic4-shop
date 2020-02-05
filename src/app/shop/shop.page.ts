import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from './shop.service';
import { MenuController, PopoverController, ModalController } from '@ionic/angular';

import { Location } from '@angular/common';
// import { SelectMenuComponent } from '../productdetail/select-menu/select-menu.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchModalComponent } from '../home/search-modal/search-modal.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  shopData: any;
  selectcheckData: any;
  promotionData: any;
  tabType: any = "homeProduct";

  constructor(
    private router: Router,
    private shopService: ShopService,
    private _location: Location,
    private menu: MenuController,
    public popoverController: PopoverController,
    private dom: DomSanitizer,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.shopService.onShopDataListChanged.subscribe((shopDataList: any) => {
      console.log(shopDataList);
      this.shopData = shopDataList;
    })
    this.shopService.onMenuDataChanged.subscribe((searchproductDataList: any) => {
      console.log(searchproductDataList);
      this.selectcheckData = searchproductDataList;
    })
    this.shopService.onPromotionDataChanged.subscribe((promotionDataList: any) => {
      console.log(promotionDataList);
      this.promotionData = promotionDataList;

      this.promotionData.link_promotion = this.dom.bypassSecurityTrustResourceUrl(this.promotionData.link_promotion);
      console.log(this.promotionData.link_promotion);

    })
  }

  goBackClick() {
    this._location.back();
  }

  onCartClick() {
    console.log("onCartClick");
    this.router.navigateByUrl('tabs/cart');
  }

  openMenu() {
    this.menu.open('end');
  }

  onReset() {
    console.log("onReset")
  }
  onConfirm() {
    console.log("onConfirm")
  }


  onHomeProduct() {
    this.tabType = 'homeProduct';
  }
  onProductAll() {
    this.tabType = 'productAll';
  }


  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: SelectMenuComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }


  async SearchModal() {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      componentProps: {

      }
    });
    return await modal.present();
  }

}
