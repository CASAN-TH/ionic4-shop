import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common'
@Component({
  selector: 'app-payment-method-recomment',
  templateUrl: './payment-method-recomment.component.html',
  styleUrls: ['./payment-method-recomment.component.scss'],
})
export class PaymentMethodRecommentComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    private _location: Location
    ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  onPayment(){
    this._location.back();
    this.modalController.dismiss();
  }
}
