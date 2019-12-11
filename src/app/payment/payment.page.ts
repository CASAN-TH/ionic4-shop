import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { Location } from '@angular/common';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { VouchersModalComponent } from '../productdetail/vouchers-modal/vouchers-modal.component';
import { SelectdownModalComponent } from './selectdown-modal/selectdown-modal.component';
import { ModalAddressComponent } from '../pages/me/modal-address/modal-address.component';

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
  percenSelected: any;
  AddaddressData: any;
  AddressModalData:any;
  


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
    this.paymentService.onAddressDataChanged.subscribe((AddaddressData: any) => {
      console.log(AddaddressData);
      this.AddaddressData = AddaddressData;
    })
    this.paymentService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.VouchersData = productdetailDataList;
    })
    this.paymentService.onSelectdownDataChanged.subscribe((selectdownData: any) => {
      console.log(selectdownData);
      this.selectdownData = selectdownData;
    })
    this.paymentService.onAddressModalDataChanged.subscribe((AddressModalData: any) => {
      console.log(AddressModalData);
      this.AddressModalData = AddressModalData;
    })
    

  }

  goBackClick() {
    this._location.back();
  }
  onOrderClick() {
    this.router.navigate(['payfor'])
  }
  onAddaddressClick(){
    this.router.navigate(['addaddress'])
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



  
  onOpenlistClick() {
    console.log("onOpenlistClick");
  }

  onPercenClick(percenId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(percenId);
    this.percenSelected = percenId;
  }

}
