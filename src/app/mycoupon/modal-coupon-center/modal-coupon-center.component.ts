import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-coupon-center',
  templateUrl: './modal-coupon-center.component.html',
  styleUrls: ['./modal-coupon-center.component.scss'],
})
export class ModalCouponCenterComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
