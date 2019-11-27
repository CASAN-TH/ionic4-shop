import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { Location } from '@angular/common';
import { SelectdownModalComponent } from './selectdown-modal/selectdown-modal.component';
import { ModalController } from '@ionic/angular';
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
  addressDataList:any;



  constructor(private router: Router,
    private paymentService: PaymentService,
    private _location: Location,
    public modalController: ModalController) { }

  ngOnInit() {
    this.paymentService.onDownDataListChanged.subscribe((downDataList: any) => {
      console.log(downDataList);
      this.downDataList = downDataList;
    })
    this.paymentService.onCartDataListChanged.subscribe((cartDataList: any) => {
      console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
   
  }

  goBackClick() {
    this._location.back();
  }
  onOrderClick(){
    this.router.navigate(['payfor'])
  }
  async selectDown() {
    const modal = await this.modalController.create({
      component: SelectdownModalComponent
    });
    return await modal.present();
  }
  async onCuponClick() {
    const modal = await this.modalController.create({
      component: VouchersModalComponent
    });
    return await modal.present();
  }
  
}
