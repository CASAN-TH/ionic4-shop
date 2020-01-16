import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from './shop.service';
import { MenuController, PopoverController } from '@ionic/angular';

import { Location } from '@angular/common';
import { SelectMenuComponent } from '../productdetail/select-menu/select-menu.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  shopData: any;
  selectcheckData: any;

  constructor(
    private router: Router, 
    private shopService : ShopService,
    private _location: Location,
    private menu: MenuController,
    public popoverController: PopoverController
    ) { }

  ngOnInit() {
    this.shopService.onShopDataListChanged.subscribe((shopDataList:any)=>{
      console.log(shopDataList);
      this.shopData = shopDataList;
    })
    this.shopService.onMenuDataChanged.subscribe((searchproductDataList: any) => {
      console.log(searchproductDataList);
      this.selectcheckData = searchproductDataList;
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

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SelectMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
