import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-coupon-center',
  templateUrl: './coupon-center.component.html',
  styleUrls: ['./coupon-center.component.scss'],
})
export class CouponCenterComponent implements OnInit {

  @Input() voucherdata: any

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
