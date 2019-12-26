import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-counter-payment-modal',
  templateUrl: './counter-payment-modal.component.html',
  styleUrls: ['./counter-payment-modal.component.scss'],
})
export class CounterPaymentModalComponent implements OnInit {

  @Input() counter_paymentData: any; payforData: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

  onCounterServiceClick(CounterServiceId: any) {
    console.log(CounterServiceId);
  }
  onCounterBankClick(CounterBankId: any) {
    console.log(CounterBankId);
  }


}
