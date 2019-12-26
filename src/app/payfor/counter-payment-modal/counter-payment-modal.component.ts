import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BillModalComponent } from '../bill-modal/bill-modal.component';

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
  async BillModal() {
    const modal = await this.modalController.create({
      component: BillModalComponent,
      componentProps: {
        // counter_paymentData: this.counter_paymentData,
        // payforData: this.payforData
      }
    });
    return await modal.present();
  }

}
