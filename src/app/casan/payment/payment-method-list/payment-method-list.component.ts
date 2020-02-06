import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentMethodRecommentComponent } from '../payment-method-recomment/payment-method-recomment.component';
import { CreditBankListComponent } from '../credit-bank-list/credit-bank-list.component';
import { OnlineBankListComponent } from '../online-bank-list/online-bank-list.component';
import { AtmBankListComponent } from '../atm-bank-list/atm-bank-list.component';
import { CounterServiceListComponent } from '../counter-service-list/counter-service-list.component';

@Component({
  selector: 'app-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.scss'],
})
export class PaymentMethodListComponent implements OnInit {

  @Input() debitcreditcardData: any;
  @Input() payforData: any;
  @Input() onlinebankingData: any;
  @Input() atm_paymentData: any;
  @Input() counter_paymentData: any;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() { }

  async RecommendedMethodModal() {
    const modal = await this.modalController.create({
      component: PaymentMethodRecommentComponent,
      componentProps: {
        // ReviewData: this.ReviewData
      }
    });
    return await modal.present();
  }
  async DebitCreditCardModal() {
    const modal = await this.modalController.create({
      component: CreditBankListComponent,
      componentProps: {
        debitcreditcardData: this.debitcreditcardData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async OnlineBankingModal() {
    const modal = await this.modalController.create({
      component: OnlineBankListComponent,
      componentProps: {
        onlinebankingData: this.onlinebankingData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async ATMPaymentModal() {
    const modal = await this.modalController.create({
      component: AtmBankListComponent,
      componentProps: {
        atm_paymentData: this.atm_paymentData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async CounterPaymentModal() {
    const modal = await this.modalController.create({
      component: CounterServiceListComponent,
      componentProps: {
        counter_paymentData: this.counter_paymentData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
}
