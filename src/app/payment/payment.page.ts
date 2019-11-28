import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { Location } from '@angular/common';
import { SelectdownModalComponent } from './selectdown-modal/selectdown-modal.component';
import { ModalController, ActionSheetController } from '@ionic/angular';
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
  addressData: any;
  VouchersData:any;



  constructor(private router: Router,
    private paymentService: PaymentService,
    private _location: Location,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.paymentService.onDownDataListChanged.subscribe((downDataList: any) => {
      console.log(downDataList);
      this.downDataList = downDataList;
    })
    this.paymentService.onCartDataListChanged.subscribe((cartDataList: any) => {
      console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
    this.paymentService.onAddressDataChanged.subscribe((addressData: any) => {
      console.log(addressData);
      this.addressData = addressData;
    })
    this.paymentService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.VouchersData = productdetailDataList;
    })
    if (!this.addressData) {
      
    }

  }

  goBackClick() {
    this._location.back();
  }
  onOrderClick() {
    this.router.navigate(['payfor'])
  }
  async selectDown() {
    const modal = await this.modalController.create({
      component: SelectdownModalComponent
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


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'วิธีการชำระเงิน',
      buttons: [{
        text: 'ผ่อนชำระ',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'ชำระเต็มจำนวนเงิน',
        handler: () => {
          console.log('Play clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
