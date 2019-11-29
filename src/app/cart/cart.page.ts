import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { SpecModalComponent } from './spec-modal/spec-modal.component';
import { ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import { InsallmentModalComponent } from './insallment-modal/insallment-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartDataList: any;
  reccommentDataList: any;

  constructor(private router: Router,
    private cartService: CartService,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.cartService.onCartDataListChanged.subscribe((cartDataList: any) => {
      console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
    this.cartService.onReccommentDataListChanged.subscribe((reccommentDataList: any) => {
      console.log(reccommentDataList);
      this.reccommentDataList = reccommentDataList;

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
  onRemoveClick() {
    console.log("Remove")
  }
  onAddClick() {
    console.log("Add")
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
  onSelectShop() {
    console.log("54")
  }
  onSelectProduct() {
    console.log("54")
  }
  async specModal() {
    const modal = await this.modalController.create({
      component: SpecModalComponent
    });
    return await modal.present();
  }
  async InstallmentModal() {
    const modal = await this.modalController.create({
      component: InsallmentModalComponent
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
    this.router.navigate(['payment'])
  }


}


