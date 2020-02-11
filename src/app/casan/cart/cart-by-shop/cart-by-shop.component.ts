import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
// import { VouchersModalComponent } from 'src/app/productdetail/vouchers-modal/vouchers-modal.component';

@Component({
  selector: 'app-cart-by-shop',
  templateUrl: './cart-by-shop.component.html',
  styleUrls: ['./cart-by-shop.component.scss'],
})
export class CartByShopComponent implements OnInit {

  @Input() cartData: any;
  @Input() vouchersData: any;
  @Input() specificationData: any;
  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if (!this.cartData) {
      this.cartData = {
        "shop": {
          "shop_name": "Name test"
        }
      }
    }
  }

  onSelectShop(i, shopId: any) {
    this.router.navigateByUrl('shop/' + shopId);
    console.log(i);
  }

  // async vouchersModal() {
  //   const modal = await this.modalController.create({
  //     component: VouchersModalComponent,
  //     cssClass: 'my-modal-css',
  //     componentProps: {
  //       VouchersData: this.vouchersData
  //     }
  //   });
  //   return await modal.present();
  // }
}
