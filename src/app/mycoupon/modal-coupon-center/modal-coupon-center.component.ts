import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-coupon-center',
  templateUrl: './modal-coupon-center.component.html',
  styleUrls: ['./modal-coupon-center.component.scss'],
})
export class ModalCouponCenterComponent implements OnInit {

  @Input() voucherdata: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.voucherdata);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
