import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MycouponService } from './mycoupon.service';
import { Location } from '@angular/common';
import { ModalCouponCenterComponent } from './modal-coupon-center/modal-coupon-center.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mycoupon',
  templateUrl: './mycoupon.page.html',
  styleUrls: ['./mycoupon.page.scss'],
})
export class MycouponPage implements OnInit {
  mycouponDataList: any;

  constructor(private router: Router, private mycouponService : MycouponService,
    private _location: Location,
    public modalController: ModalController) { }

  ngOnInit() {
    this.mycouponService.onMycouponDataListChanged.subscribe((mycouponDataList:any)=>{
      console.log(mycouponDataList);
      this.mycouponDataList = mycouponDataList;
    })
  }

  onBackClick() {
    this._location.back();
  }

  async ModalCouponCenter() {
    const value = 0
    const modal = await this.modalController.create({
      component: ModalCouponCenterComponent,
      componentProps: {

      }
    });
    return await modal.present();
  }

}
