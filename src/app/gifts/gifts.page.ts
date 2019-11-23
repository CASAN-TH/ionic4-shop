import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftsService } from './gifts.service';
import { ModalController } from '@ionic/angular';
import { PaymentgiftModalComponent } from './paymentgift-modal/paymentgift-modal.component';
import { TcoingiftModalComponent } from './tcoingift-modal/tcoingift-modal.component';
import { WarrantygiftModalComponent } from './warrantygift-modal/warrantygift-modal.component';
import { SpecificationgiftModalComponent } from './specificationgift-modal/specificationgift-modal.component';
import { ImformationspecgiftModalComponent } from './imformationspecgift-modal/imformationspecgift-modal.component';

import { Location } from '@angular/common'

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

  constructor(
    private router: Router,
    private giftsService: GiftsService,
    public modalController: ModalController,
    private _location: Location) { }

  ngOnInit() {
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.giftsData = giftsDataList;
    })

    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.PaymentgiftData = giftsDataList;
    })
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.TcoingiftData = giftsDataList;
    })
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.WarrantygiftData = giftsDataList;
    })
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.SpecificationgiftData = giftsDataList;
    })
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList: any) => {
      console.log(giftsDataList);
      this.ImformationSpecgiftData = giftsDataList;
    })
  }

  async paymentgiftModal() {
    const modal = await this.modalController.create({
      component: PaymentgiftModalComponent,
      componentProps: {
        PaymentgiftData: this.PaymentgiftData
      }
    });
    return await modal.present();
  }
  async tcoingiftModal() {
    const modal = await this.modalController.create({
      component: TcoingiftModalComponent,
      componentProps: {
        TcoingiftData: this.TcoingiftData
      }
    });
    return await modal.present();
  }
  async warrantygiftModal() {
    const modal = await this.modalController.create({
      component: WarrantygiftModalComponent,
      componentProps: {
        WarrantygiftData: this.WarrantygiftData
      }
    });
    return await modal.present();
  }
  async specificationgiftModal() {
    const modal = await this.modalController.create({
      component: SpecificationgiftModalComponent,
      componentProps: {
        SpecificationgiftData: this.SpecificationgiftData
      }
    });
    return await modal.present();
  }
  async imformationSpecgiftModal() {
    const modal = await this.modalController.create({
      component: ImformationspecgiftModalComponent,
      componentProps: {
        ImformationSpecgiftData: this.ImformationSpecgiftData
      }
    });
    return await modal.present();
  }


  goBackClick() {
    this._location.back();
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };


}
