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
  SpecificationData: any;
  PaymentData: any;
  vouchersData: any;
  AddaddressData: any;
  TotalCartDataList: any;

  // isIndeterminate:boolean;
  // masterCheck:boolean;
  // checkBoxList:any;

  constructor(private router: Router,
    private cartService: CartService,
    private paymentService: PaymentService,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController) {
    // this.checkBoxList = [];
  }

  ngOnInit() {
    this.cartService.onCartDataListChanged.subscribe((cartDataList: any) => {
      this.cartDataList = cartDataList;
      console.log(cartDataList);
    })
    this.cartService.onTotalCartDataChanged.subscribe((TotalCartDataList: any) => {
      this.TotalCartDataList = TotalCartDataList;
      console.log(TotalCartDataList);
    })
    this.cartService.onReccommentDataListChanged.subscribe((reccommentDataList: any) => {
      // console.log(reccommentDataList);
      this.reccommentDataList = reccommentDataList;
    })
    this.cartService.onSpecificationDataChanged.subscribe((productdetailDataList: any) => {
      // console.log(productdetailDataList);
      this.SpecificationData = productdetailDataList;
    })
    this.cartService.onPaymentDataChanged.subscribe((productdetailDataList: any) => {
      // console.log(productdetailDataList);
      this.PaymentData = productdetailDataList;
    })
    this.cartService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      // console.log(productdetailDataList);
      this.vouchersData = productdetailDataList;
    })
    this.paymentService.onAddressDataChanged.subscribe((AddaddressData: any) => {
      // console.log(AddaddressData);
      this.AddaddressData = AddaddressData;
    })

  }

  onDeleteClick() {
    console.log("Delete")
  }
  onOpenlistClick() {
    console.log("nevigate Productlist")
  }
  onSelectProductClick() {
    console.log("onSelectProductClick")
  }
  onRemoveClick(i, j) {
    this.cartDataList[i].items[j].amount_product -= 1
    console.log(this.cartDataList[i].items[j].amount_product)
  }
  onAddClick(i, j) {
    this.cartDataList[i].items[j].amount_product += 1
    console.log(this.cartDataList[i].items[j].amount_product)
  }
  onAcceptCodeClick() {
    console.log("Add")
  }
  onOpenDetailClick() {
    console.log("nevigate Productlist")
  }
  onAddToCartClick() {
    console.log("addtocart")
  }
  onPayClick() {
    this.router.navigate(['payment'])
  }
  onSelectAll() {
    console.log("54")
  }

  onSelectProduct() {
    console.log("54")
  }
  async specModal() {
    const modal = await this.modalController.create({
      component: SpecificationModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        SpecificationData: this.SpecificationData
      }
    });
    return await modal.present();
  }
  async InstallmentModal() {
    const modal = await this.modalController.create({
      component: PaymentModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PaymentData: this.PaymentData
      }
    });
    return await modal.present();
  }

}




