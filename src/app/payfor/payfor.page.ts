import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { PayforService } from './payfor.service';
import { ModalController, AlertController } from '@ionic/angular';
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
  debitcreditcardData: any;
  onlinebankingData: any;
  atm_paymentData: any;
  counter_paymentData: any;

  constructor(private router: Router,
    private payforService: PayforService,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    private _location: Location) { }

  ngOnInit() {
    this.payforService.onPayforDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.payforData = payforDataList;
    })

    this.payforService.onDebitCreditCardDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.debitcreditcardData = payforDataList;
    })

    this.payforService.onlineBankingDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.onlinebankingData = payforDataList;
    })
    this.payforService.onATM_PaymentDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.atm_paymentData = payforDataList;
    })
    this.payforService.onCounter_PaymentDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.counter_paymentData = payforDataList;
    })
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
        debitcreditcardData: this.debitcreditcardData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async OnlineBankingModal() {
    const modal = await this.modalController.create({
      component: OnlineBankingModalComponent,
      componentProps: {
        onlinebankingData: this.onlinebankingData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async ATMPaymentModal() {
    const modal = await this.modalController.create({
      component: ATMPaymentModalComponent,
      componentProps: {
        atm_paymentData: this.atm_paymentData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }
  async CounterPaymentModal() {
    const modal = await this.modalController.create({
      component: CounterPaymentModalComponent,
      componentProps: {
        counter_paymentData: this.counter_paymentData,
        payforData: this.payforData
      }
    });
    return await modal.present();
  }

  async confirmAlert() {
    const alert = await this.alertCtrl.create({
      header: 'คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการชำระเงิน',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
              this._location.back();
          }
        }, {
          text: 'ดำเนินการชำระต่อ',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
  
}
