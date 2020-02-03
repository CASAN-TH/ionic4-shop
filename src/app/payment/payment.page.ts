import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { Location } from '@angular/common';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { VouchersModalComponent } from '../productdetail/vouchers-modal/vouchers-modal.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  select: any;
  downDataList: any;
  cartDataList: any;
  VouchersData: any;
  selectdownData: any;
  AddaddressData: any;
  AddressModalData: any;

  creditPoint: any;
  numeral = require('numeral');
  creditCurrency: any;

  profilestatus: any;
  acceptClick: boolean = false;

  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private _location: Location,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.paymentService.onCreditStatusChanged.subscribe((profilestatus: any) => {
      this.profilestatus = profilestatus;
    })
    this.paymentService.onCreditPointChanged.subscribe((point: any) => {
      this.creditPoint = point
      const dataNum = this.numeral(this.creditPoint.credit.creditremain).format('0,0');
      this.creditCurrency = dataNum
      this.paymentService.onCartDataListChanged.subscribe((cartDataList: any) => {

        this.cartDataList = cartDataList;
        this.select = this.cartDataList.totalcart.total_discount > this.creditPoint.credit.creditremain ? "ชำระเต็มจำนวนเงิน" : "ผ่อนชำระ";

      })
    });
    this.paymentService.onDownDataListChanged.subscribe((downDataList: any) => {
      this.downDataList = downDataList;
    })
    this.paymentService.onAddressDataChanged.subscribe((AddaddressData: any) => {
      this.AddaddressData = AddaddressData;
    })
    this.paymentService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.VouchersData = productdetailDataList;
    })
    this.paymentService.onSelectdownDataChanged.subscribe((selectdownData: any) => {
      this.selectdownData = selectdownData;
    })
    this.paymentService.onAddressModalDataChanged.subscribe((AddressModalData: any) => {
      this.AddressModalData = AddressModalData;
    })
    if (!this.AddaddressData) {
      this.presentAlert();
    }

  }
  profile_status(profile_status: any) {
    throw new Error("Method not implemented.");
  }

  onTypeBack(e) {
    this.select = e
  }

  onAcceptBack(e) {
    this.acceptClick = e
  }

  async vouchersModal() {
    const modal = await this.modalController.create({
      component: VouchersModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        VouchersData: this.VouchersData
      }
    });
    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      message: 'กรุณาเพิ่มที่อยู่จัดส่งใหม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: (blah) => {
          }
        }, {
          text: 'เพิ่ม',
          handler: () => {
            this.router.navigate(['addaddress'])
          }
        }
      ]
    });
    await alert.present();
  }
  async AcceptAlert() {
    const alert = await this.alertCtrl.create({
      message: 'การผ่อนชำระต้องได้รับความยินยอมข้อตกลงการใช้บริการ',
      buttons: [
        {
          text: 'ดูอีกครั้ง',
          handler: (blah) => {
          }
        }, {
          text: 'เห็นด้วย',
          handler: () => {
            this.router.navigate(['payfor'])
          }
        }
      ]
    });
    await alert.present();
  }

  async BackAlert() {
    const alert = await this.alertCtrl.create({
      header: 'คุณแน่ใจหรือไม่ว่าต้องออกจากระบบ',
      buttons: [
        {
          text: 'ออกจากหน้านี้',
          handler: () => {
            this._location.back();
          }
        }, {
          text: 'ดูอีกครั้ง',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

}
