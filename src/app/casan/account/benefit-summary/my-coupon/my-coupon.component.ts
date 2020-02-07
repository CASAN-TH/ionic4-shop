import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CouponCenterComponent } from '../coupon-center/coupon-center.component';

@Component({
  selector: 'app-my-coupon',
  templateUrl: './my-coupon.component.html',
  styleUrls: ['./my-coupon.component.scss'],
})
export class MyCouponComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

  async ModalCouponCenter() {
    const modal = await this.modalController.create({
      component: CouponCenterComponent,
    });
    return await modal.present();
  }

}
