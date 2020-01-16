import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftsService } from './gifts.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { PaymentgiftModalComponent } from './paymentgift-modal/paymentgift-modal.component';
import { TcoingiftModalComponent } from './tcoingift-modal/tcoingift-modal.component';
import { WarrantygiftModalComponent } from './warrantygift-modal/warrantygift-modal.component';
import { SpecificationgiftModalComponent } from './specificationgift-modal/specificationgift-modal.component';
import { ImformationspecgiftModalComponent } from './imformationspecgift-modal/imformationspecgift-modal.component';

import { Location } from '@angular/common'
import { SelectMenuComponent } from '../productdetail/select-menu/select-menu.component';
import { ShareModalComponent } from '../productdetail/share-modal/share-modal.component';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.page.html',
  styleUrls: ['./gifts.page.scss'],
})
export class GiftsPage implements OnInit {
  giftsData: any;

  PaymentgiftData: any
  TcoingiftData: any
  WarrantygiftData: any
  SpecificationgiftData: any
  ImformationSpecgiftData: any
  ShareData: any
  ReccommentData: any

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(
    private router: Router,
    private giftsService: GiftsService,
    public modalController: ModalController,
    private _location: Location,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.giftsData = giftsDataList;
    })
    this.giftsService.onReccommentDataChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.ReccommentData = giftsDataList;
    })

    this.giftsService.onPaymentgiftDataChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.PaymentgiftData = giftsDataList;
    })
    this.giftsService.onTcoingiftDataChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.TcoingiftData = giftsDataList;
    })
    this.giftsService.onWarrantygiftDataChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.WarrantygiftData = giftsDataList;
    })
    this.giftsService.onSpecificationgiftDataChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.SpecificationgiftData = giftsDataList;
    })
    this.giftsService.onImformationSpecgiftDataChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.ImformationSpecgiftData = giftsDataList;
    })
    this.giftsService.onShareDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ShareData = productdetailDataList;
    })
  }

  async paymentgiftModal() {
    const modal = await this.modalController.create({
      component: PaymentgiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PaymentgiftData: this.PaymentgiftData
      }
    });
    return await modal.present();
  }
  async tcoingiftModal() {
    const modal = await this.modalController.create({
      component: TcoingiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        TcoingiftData: this.TcoingiftData
      }
    });
    return await modal.present();
  }
  async warrantygiftModal() {
    const modal = await this.modalController.create({
      component: WarrantygiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        WarrantygiftData: this.WarrantygiftData
      }
    });
    return await modal.present();
  }
  async specificationgiftModal() {
    const modal = await this.modalController.create({
      component: SpecificationgiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        SpecificationgiftData: this.SpecificationgiftData
      }
    });
    return await modal.present();
  }
  async imformationSpecgiftModal() {
    const modal = await this.modalController.create({
      component: ImformationspecgiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        ImformationSpecgiftData: this.ImformationSpecgiftData
      }
    });
    return await modal.present();
  }


  goBackClick() {
    this._location.back();
  }
  onCartClick() {
    console.log("onCartClick");
    this.router.navigateByUrl('tabs/cart');
  }
  onPaymentClick(paymentId: any) {
    console.log("onPaymentClick");
    this.router.navigateByUrl('payment/' + paymentId);
  }
  onChatClick() {
    console.log("Chat Bot");
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SelectMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async onShareModalClick() {
    const modal = await this.modalController.create({
      component: ShareModalComponent,
      cssClass: 'share-modal-css',
      componentProps: {
        ShareData: this.ShareData
      }
    });
    return await modal.present();
  }

}
