import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtmBillModalComponent } from './atm-bill-modal/atm-bill-modal.component';
@Component({
  selector: 'app-atm-bank-list',
  templateUrl: './atm-bank-list.component.html',
  styleUrls: ['./atm-bank-list.component.scss'],
})
export class AtmBankListComponent implements OnInit {

  @Input() atm_paymentData: any;
  @Input() payforData: any;

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
