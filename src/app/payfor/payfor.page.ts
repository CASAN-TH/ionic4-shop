import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { PayforService } from './payfor.service';
import { ModalController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-payfor',
  templateUrl: './payfor.page.html',
  styleUrls: ['./payfor.page.scss'],
})
export class PayforPage implements OnInit {
  numeral = require('numeral');
  billPrice: any;
  payBillData: any;
  payforData: any;
  debitcreditcardData: any;
  onlinebankingData: any;
  atm_paymentData: any;
  counter_paymentData: any;
  mockData: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private payforService: PayforService,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    private _location: Location
  ) { }

  ngOnInit() {
    this.payforService.onPayforDataChanged.subscribe((payforDataList: any) => {
      console.log(payforDataList);
      this.payforData = payforDataList;
    })

    this.payforService.onPayBillDataListChanged.subscribe((payBillData: any) => {
      console.log(payBillData);
      this.payBillData = payBillData;
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

    this.route.queryParams
      .subscribe(params => {
        this.mockData.billId = params.billId ? params.billId : "";
        this.mockData.price = params.price ? params.price : "";
        // console.log(this.mockData);

        const price = this.numeral(this.mockData.price).format('0,0.00');
        this.billPrice = price
        // console.log(this.billPrice)
      });
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
