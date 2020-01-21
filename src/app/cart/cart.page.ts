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
  VouchersData: any;
  AddaddressData: any;

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
      console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
    this.cartService.onReccommentDataListChanged.subscribe((reccommentDataList: any) => {
      console.log(reccommentDataList);
      this.reccommentDataList = reccommentDataList;
    })
    this.cartService.onSpecificationDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.SpecificationData = productdetailDataList;
    })
    this.cartService.onPaymentDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.PaymentData = productdetailDataList;
    })
    this.cartService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.VouchersData = productdetailDataList;
    })
    this.paymentService.onAddressDataChanged.subscribe((AddaddressData: any) => {
      console.log(AddaddressData);
      this.AddaddressData = AddaddressData;
    })

  }

  onShoppingClick() {
    console.log("ShoppingClick")
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
    this.cartDataList.carts[i].items[j].amount_product -= 1
    console.log(this.cartDataList.carts[i].items[j].amount_product)
  }
  onAddClick(i, j) {
    this.cartDataList.carts[i].items[j].amount_product += 1
    console.log(this.cartDataList.carts[i].items[j].amount_product)
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
  onSelectShop(i, shopId: any) {
    this.router.navigateByUrl('shop/' + shopId);
    console.log(i);
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
  // checkMaster() {
  //   setTimeout(() => {
  //     this.checkBoxList.forEach(obj => {
  //       obj.isChecked = this.masterCheck;
  //     });
  //   });
  // }

  // checkEvent() {
  //   const totalItems = this.checkBoxList.length;
  //   let checked = 0;
  //   this.checkBoxList.map(obj => {
  //     if (obj.isChecked) checked++;
  //   });
  //   if (checked > 0 && checked < totalItems) {
  //     //If even one item is checked but not all
  //     this.isIndeterminate = true;
  //     this.masterCheck = false;
  //   } else if (checked == totalItems) {
  //     //If all are checked
  //     this.masterCheck = true;
  //     this.isIndeterminate = false;
  //   } else {
  //     //If none is checked
  //     this.isIndeterminate = false;
  //     this.masterCheck = false;
  //   }
  // }

}




