import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from './bill.service';
import { Location } from '@angular/common'
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaybackHistoryComponent } from './payback-history/payback-history.component';
import { PaymentProductDetailComponent } from './payment-product-detail/payment-product-detail.component';
import { PaynowComponent } from './paynow/paynow.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  numeral = require('numeral');
  priceCurrency: any;
  billData: any;
  paymentData: any;
  paybackData: any;
  inx = 0

  constructor(
    private router: Router,
    private billService: BillService,
    private _location: Location,
    public actionSheetController: ActionSheetController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.billService.onBillDataListChanged.subscribe((billData: any) => {
      console.log(billData);
      this.billData = billData;

      const price = this.numeral(this.billData.bills[0].bill_price).format('0,0.00');
      this.priceCurrency = price
    });
    this.billService.onPaymentHistoryDataChanged.subscribe((paymentData: any) => {
      // console.log(paymentData);
      this.paymentData = paymentData;
    });
    this.billService.onPaybackHistoryDataChanged.subscribe((paybackData: any) => {
      // console.log(paybackData);
      this.paybackData = paybackData;
    });
  }

  async openMoreAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'ดูเพิ่มเติม',
      buttons: [{
        text: 'ประวัติการชำระเงิน',
        handler: async () => {
          this.openPayment();
        }
      }, {
        text: 'ประวัติการสั่งซื้อ',
        handler: async () => {
          this.openOrder();
        }
      }, {
        text: 'เงินคืนเต็มจำนวน',
        handler: () => {
          this.openPayback();
        }
      }, {
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          console.log('Cancel');
        }
      }]
    });
    await actionSheet.present();
  }

  async openPayment() {
    const modal = await this.modalCtrl.create({
      component: PaymentHistoryComponent,
      componentProps: {
        "tabNav": 1,
        "paymentData": this.paymentData
      }
    });
    return await modal.present();
  }

  async openOrder() {
    const modal = await this.modalCtrl.create({
      component: PaymentHistoryComponent,
      componentProps: {
        "tabNav": 0,
        "paymentData": this.paymentData
      }
    });
    return await modal.present();
  }

  async openPayback() {
    const modal = await this.modalCtrl.create({
      component: PaybackHistoryComponent,
      componentProps: {
        "paybackData": this.paybackData
      }
    });
    return await modal.present();
  }

  onPreviousBill() {
    this.inx -= 1
    const price = this.numeral(this.billData.bills[this.inx].bill_price).format('0,0.00');
    this.priceCurrency = price
    // console.log(this.priceCurrency)
    // console.log(this.inx)
  }

  onNextBill() {
    this.inx += 1
    const price = this.numeral(this.billData.bills[this.inx].bill_price).format('0,0.00');
    this.priceCurrency = price
    // console.log(this.priceCurrency)
    // console.log(this.inx)
  }

  goBackClick() {
    this._location.back();
  }

  async onListProduct(idx) {
    const modal = await this.modalCtrl.create({
      component: PaymentProductDetailComponent,
      componentProps: {
        "data": this.billData.bills[this.inx].bill_products[idx]
      }
    });
    return await modal.present();
  }

  async onPayNow() {
    let priceForPay = this.billData.bills[this.inx].bill_price - this.billData.bills[this.inx].bill_payment
    const modal = await this.modalCtrl.create({
      component: PaynowComponent,
      componentProps: {
        "data": {
          "billId": this.billData.bills[this.inx]._id,
          "price": priceForPay.toFixed(2),
          "currency": this.billData.bills[this.inx].bill_currency
        }
      }
    });
    return await modal.present();
  }
}
