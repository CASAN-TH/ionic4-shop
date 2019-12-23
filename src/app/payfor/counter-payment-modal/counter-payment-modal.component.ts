import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-counter-payment-modal',
  templateUrl: './counter-payment-modal.component.html',
  styleUrls: ['./counter-payment-modal.component.scss'],
})
export class CounterPaymentModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }


}
