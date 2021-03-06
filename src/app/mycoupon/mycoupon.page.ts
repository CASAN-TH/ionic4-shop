import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MycouponService } from './mycoupon.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { CouponCenterComponent } from '../casan/account/benefit-summary/coupon-center/coupon-center.component';

@Component({
  selector: 'app-mycoupon',
  templateUrl: './mycoupon.page.html',
  styleUrls: ['./mycoupon.page.scss'],
})
export class MycouponPage implements OnInit {
  mycouponDataList: any;
  voucherdata: any;

  constructor(private router: Router, private mycouponService : MycouponService,
    private _location: Location,
    public modalController: ModalController) { }

  ngOnInit() {
    this.mycouponService.onMycouponDataListChanged.subscribe((mycouponDataList:any)=>{
      console.log(mycouponDataList);
      this.mycouponDataList = mycouponDataList;
    })
    this.mycouponService.onVoucherDataListChanged.subscribe((voucherdata:any)=>{
      console.log(voucherdata);
      this.voucherdata = voucherdata;
    })
  }

  onBackClick() {
    this._location.back();
  }

  async ModalCouponCenter() {
    const modal = await this.modalController.create({
      component: CouponCenterComponent,
      componentProps: {
        voucherdata: this.voucherdata,
      }
    });
    return await modal.present();
  }

}
