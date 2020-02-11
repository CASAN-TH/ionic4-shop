import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { SpecificationModalComponent } from 'src/app/productdetail/specification-modal/specification-modal.component';

@Component({
  selector: 'app-cart-by-shopitem',
  templateUrl: './cart-by-shopitem.component.html',
  styleUrls: ['./cart-by-shopitem.component.scss'],
})
export class CartByShopitemComponent implements OnInit {

  @Input() itemDatas: Array<any>;
  @Input() specificationData: any;
  @Output() amountChanged: EventEmitter<any> = new EventEmitter()
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.itemDatas)
    if (!this.itemDatas) {
      this.itemDatas = [
        {
          "images": ["https://image.shutterstock.com/image-vector/no-image-available-icon-vector-260nw-1323742826.jpg"],
          "item_checked": true,
          "product_status": "waitpayment",
          "down_payment_lists": [20, 30, 40, 50],
          "periods_lists": [3, 6, 9, 12, 18],
          "promotions": [
            {
              "gift_type": "ของแถม",
              "gift_name": "หูฟังไร้สาย",
              "gift_amount": 1
            }
          ],
          "product_id": "test",
          "sku": "en002",
          "name": "product name test",
          "sale_price_percentage": 20,
          "sale_avaliable": true,
          "sale_price": {
            "price": 8000,
            "currency": "฿"
          },
          "sale_price_text": "฿8,000.00",
          "regular_price": {
            "price": 10000,
            "currency": "฿"
          },
          "regular_price_text": "฿10,000.00",
          "down_payment": {
            "price": 1000,
            "currency": "฿"
          },
          "down_payment_text": "฿1,000.00",
          "installment": {
            "price": 444.44444444,
            "period": 18,
            "currency": "฿"
          },
          "installment_price_text": "฿444.44",
          "amount_product": 1,
          "shipping": {
            "shipping_name": "kerry",
            "shipping_fee": 50,
            "shipping_currency": "฿"
          }
        }
      ]
    }
  }

  onSelectProduct() {
    console.log("selected")
  }

  onOpenlistClick() {
    console.log("nevigate Productlist")
  }

  // async specModal() {
  //   const modal = await this.modalController.create({
  //     component: SpecificationModalComponent,
  //     cssClass: 'my-modal-css',
  //     componentProps: {
  //       SpecificationData: this.specificationData
  //     }
  //   });
  //   return await modal.present();
  // }

  onRemoveClick(j) {
    this.itemDatas[j].amount_product -= 1;
    this.amountChanged.emit(this.itemDatas);
  }
  onAddClick(j) {
    this.itemDatas[j].amount_product += 1;
    this.amountChanged.emit(this.itemDatas);
  }
}
