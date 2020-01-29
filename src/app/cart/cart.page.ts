import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import { SpecificationModalComponent } from '../productdetail/specification-modal/specification-modal.component';
import { PaymentModalComponent } from '../productdetail/payment-modal/payment-modal.component';
import { VouchersModalComponent } from '../productdetail/vouchers-modal/vouchers-modal.component';
import { PaymentService } from '../payment/payment.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  inputs: ["recivedata"]
})
export class CartPage implements OnInit {
  cartDataList: any;
  reccommentDataList: any;
  specificationData: any;
  paymentData: any;
  vouchersData: any;
  addaddressData: any;
  totalCartDataList: any;

  constructor(
    private router: Router,
    private cartService: CartService,
    private paymentService: PaymentService,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController
    ) {}

  ngOnInit() {
    this.cartService.onCartDataListChanged.subscribe((cartDataList: any) => {
      this.cartDataList = cartDataList;
    })
    this.cartService.onTotalCartDataChanged.subscribe((TotalCartDataList: any) => {
      this.totalCartDataList = TotalCartDataList;
    })
    this.cartService.onReccommentDataListChanged.subscribe((reccommentDataList: any) => {
      this.reccommentDataList = reccommentDataList;
      console.log(this.reccommentDataList);
    })
    this.cartService.onSpecificationDataChanged.subscribe((productdetailDataList: any) => {
      this.specificationData = productdetailDataList;
    })
    this.cartService.onPaymentDataChanged.subscribe((productdetailDataList: any) => {
      this.paymentData = productdetailDataList;
    })
    this.cartService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.vouchersData = productdetailDataList;
    })
    this.paymentService.onAddressDataChanged.subscribe((AddaddressData: any) => {
      this.addaddressData = AddaddressData;
    })
  }

  onAcceptCodeClick() {
    console.log("Add Code")
  }

  onPayClick() {
    this.router.navigate(['payment'])
  }

  onSelectAll() {
    console.log("select all")
  }

  async InstallmentModal() {
    const modal = await this.modalController.create({
      component: PaymentModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PaymentData: this.paymentData
      }
    });
    return await modal.present();
  }

  onProductClick(productId) {
    this.router.navigateByUrl('/productdetail/' + productId)
  }

}




