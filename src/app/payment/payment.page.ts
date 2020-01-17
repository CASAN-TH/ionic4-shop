import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { Location } from '@angular/common';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { VouchersModalComponent } from '../productdetail/vouchers-modal/vouchers-modal.component';
import { SelectdownModalComponent } from './selectdown-modal/selectdown-modal.component';
import { ModalAddressComponent } from '../pages/me/modal-address/modal-address.component';
import { PaymentListModalComponent } from './payment-list-modal/payment-list-modal.component';
import { AcceptModalComponent } from './accept-modal/accept-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  select: any = "ผ่อนชำระ";
  downDataList: any;
  cartDataList: any;
  VouchersData: any;
  selectdownData: any;
  AddaddressData: any;
  AddressModalData: any;
  showToolbar: boolean;
  unitSelected: any;

  creditPoint: any; 
  numeral = require('numeral');
  creditCurrency: any;

  profilestatus: any;




  constructor(private router: Router,
    private paymentService: PaymentService,
    private _location: Location,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    public actionSheetController: ActionSheetController,
    public dialog: MatDialog) { }
  
  ngOnInit() {
    this.paymentService.onCreditStatusChanged.subscribe((profilestatus: any) => {
      this.profilestatus = profilestatus;
      console.log(this.profilestatus)
    })
    this.paymentService.onCreditPointChanged.subscribe((point: any) => {
      this.creditPoint = point
      const dataNum = this.numeral(this.creditPoint.credit.creditremain).format('0,0');
      this.creditCurrency = dataNum
    });
    this.paymentService.onDownDataListChanged.subscribe((downDataList: any) => {
      // console.log(downDataList);
      this.downDataList = downDataList;
    })
    this.paymentService.onCartDataListChanged.subscribe((cartDataList: any) => {
      // console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
    this.paymentService.onAddressDataChanged.subscribe((AddaddressData: any) => {
      // console.log(AddaddressData);
      this.AddaddressData = AddaddressData;
    })
    this.paymentService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      // console.log(productdetailDataList);
      this.VouchersData = productdetailDataList;
    })
    this.paymentService.onSelectdownDataChanged.subscribe((selectdownData: any) => {
      // console.log(selectdownData);
      this.selectdownData = selectdownData;
    })
    this.paymentService.onAddressModalDataChanged.subscribe((AddressModalData: any) => {
      // console.log(AddressModalData);
      this.AddressModalData = AddressModalData;
    })
    if (!this.AddaddressData) {
      this.presentAlert();
    }

  }
  profile_status(profile_status: any) {
    throw new Error("Method not implemented.");
  }

  onOrderClick() {
    this.router.navigate(['payfor'])
  }
  onAddaddressClick() {
    this.router.navigate(['addaddress'])
  }
  onUnitClick(unitId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(unitId);
    this.unitSelected = unitId;
  }
  onApplyForCredit(){
  this.router.navigateByUrl('credit');
  }

  async selectDownModal() {
    const modal = await this.modalController.create({
      component: SelectdownModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        selectdownData: this.selectdownData
      }
    });
    return await modal.present();
  }

  async paymentlistModal() {
    const modal = await this.modalController.create({
      component: PaymentListModalComponent,
      componentProps: {
        cartDataList: this.cartDataList
      }
    });
    return await modal.present();
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
 
  acceptModal(): void {
    const dialogRef = this.dialog.open(AcceptModalComponent, {
      width: '500px',
      height:'120px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  async addresslModal() {
    const modal = await this.modalController.create({
      component: ModalAddressComponent,
      componentProps: {
        AddressData: this.AddressModalData.address
      }
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'วิธีการชำระเงิน',
      buttons: [{
        text: 'ผ่อนชำระ',
        handler: () => {
          this.select = "ผ่อนชำระ"
        }
      }, {
        text: 'ชำระเต็มจำนวนเงิน',
        handler: () => {
          this.select = "ชำระเต็มจำนวนเงิน"
        }
      }]
    });
    await actionSheet.present();
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

  onOpenlistClick() {
    console.log("onOpenlistClick");
  }


  // onScroll($event: CustomEvent<ScrollDetail>) {
  //   if ($event && $event.detail && $event.detail.scrollTop) {
  //     const scrollTop = $event.detail.scrollTop;
  //     this.showToolbar = scrollTop >= 50;
  //   }
  // }


}
