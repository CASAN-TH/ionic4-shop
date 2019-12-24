import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { PayforService } from './payfor.service';
import { ModalController } from '@ionic/angular';
import { RecommendedMethodModalComponent } from './recommended-method-modal/recommended-method-modal.component';
import { DebitCreditCardModalComponent } from './debit-credit-card-modal/debit-credit-card-modal.component';
import { OnlineBankingModalComponent } from './online-banking-modal/online-banking-modal.component';
import { ATMPaymentModalComponent } from './atmpayment-modal/atmpayment-modal.component';
import { CounterPaymentModalComponent } from './counter-payment-modal/counter-payment-modal.component';

@Component({
  selector: 'app-payfor',
  templateUrl: './payfor.page.html',
  styleUrls: ['./payfor.page.scss'],
})
export class PayforPage implements OnInit {
  payforData: any;
  DebitCreditCardData: any;
  onlineBankingData: any;
  onATM_PaymentData: any;
  Counter_PaymentData: any;

  constructor(private router: Router,
    private payforService: PayforService,
    public modalController: ModalController,
    private _location: Location) { }

  ngOnInit() {
    this.payforService.onPayforDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.payforData = payforDataList;
    })

    this.payforService.onDebitCreditCardDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.DebitCreditCardData = payforDataList;
    })

    this.payforService.onlineBankingDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.onlineBankingData = payforDataList;
    })
    this.payforService.onATM_PaymentDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.onATM_PaymentData = payforDataList;
    })
    this.payforService.onCounter_PaymentDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.Counter_PaymentData = payforDataList;
    })
  }
  goBackClick() {
    this._location.back();
  }

  async RecommendedMethodModal() {
    const modal = await this.modalController.create({
      component: RecommendedMethodModalComponent,
      componentProps: {
        // ReviewData: this.ReviewData
      }
    });
    return await modal.present();
  }
  async DebitCreditCardModal() {
    const modal = await this.modalController.create({
      component: DebitCreditCardModalComponent,
      componentProps: {
        DebitCreditCardData: this.DebitCreditCardData
      }
    });
    return await modal.present();
  }
  async OnlineBankingModal() {
    const modal = await this.modalController.create({
      component: OnlineBankingModalComponent,
      componentProps: {
        onlineBankingData: this.onlineBankingData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async ATMPaymentModal() {
    const modal = await this.modalController.create({
      component: ATMPaymentModalComponent,
      componentProps: {
        onATM_PaymentData: this.onATM_PaymentData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async CounterPaymentModal() {
    const modal = await this.modalController.create({
      component: CounterPaymentModalComponent,
      componentProps: {
        Counter_PaymentData: this.Counter_PaymentData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }


}
