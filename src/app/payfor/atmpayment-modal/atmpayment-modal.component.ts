import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtmBillModalComponent } from '../atm-bill-modal/atm-bill-modal.component';

@Component({
  selector: 'app-atmpayment-modal',
  templateUrl: './atmpayment-modal.component.html',
  styleUrls: ['./atmpayment-modal.component.scss'],
})
export class ATMPaymentModalComponent implements OnInit {

  @Input() atm_paymentData: any; payforData: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

  onSelectcheckboxBankClick(CheckBoxBankId: any) {
    console.log(CheckBoxBankId);
  }

  async AtmBillModal() {
    const modal = await this.modalController.create({
      component: AtmBillModalComponent,
      componentProps: {
        // counter_paymentData: this.counter_paymentData,
        // payforData: this.payforData
      }
    });
    return await modal.present();
  }

}
