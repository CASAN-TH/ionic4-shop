import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from './bill.service';
import { Location } from '@angular/common'
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaybackHistoryComponent } from './payback-history/payback-history.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  billData: any;
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
    })
  }

  async openMoreAction() { 
    const actionSheet = await this.actionSheetController.create({
      header: 'ดูเพิ่มเติม',
      buttons: [{
        text: 'ประวัติการชำระหนี้',
        handler: async () => {
          this.openPayment();
        }
      },{
        text: 'ประวัติการซื้อ',
        handler: async () => {
          this.openPayment2();
        }
      },{
        text: 'เงินคืนเต็มจำนวน',
        handler: () => {
          this.openPayback();
        }
      },{
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          console.log('Cancel');
        }
      }]
    });
    await actionSheet.present();
  }

  async openPayment(){
    const modal = await this.modalCtrl.create({
      component: PaymentHistoryComponent,
      componentProps: {
        "tabNav": 1
      }
    });
    return await modal.present();
  }
  async openPayment2(){
    const modal = await this.modalCtrl.create({
      component: PaymentHistoryComponent,
      componentProps: {
        "tabNav": 2
      }
    });
    return await modal.present();
  }

  async openPayback(){
    const modal = await this.modalCtrl.create({
      component: PaybackHistoryComponent,
    });
    return await modal.present();
  }

  onPreviousBill() {
    this.inx -= 1
    // console.log(this.inx)
  }

  onNextBill() {
    this.inx += 1
    // console.log(this.inx)
  }

  goBackClick() {
    this._location.back();
  }

}
