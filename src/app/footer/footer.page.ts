import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdetailService } from '../productdetail/productdetail.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  inputs: ["recivedata"]
})
export class FooterPage implements OnInit {

  @Input() recivedata: any;
  userData: any

  constructor(
    private productdetailService: ProductdetailService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getUser()
  }
  async getUser(){
    const res = await this.productdetailService.getUser()
    this.userData = res   //get เอา id จาก User
    console.log(this.userData.data.username)
  }

  onCartClick() {
    const body = {
      u_id: this.userData.data.username,
      shop: {
        shop_id: this.recivedata.shop.shop_id,
        shop_name: this.recivedata.shop.shop_name,
        shop_image: this.recivedata.shop.shop_image
      },
      items: [
        {
          product_id: this.recivedata._id,
          sku: this.recivedata.sku,
          images: this.recivedata.images,
          name: this.recivedata.name,
          option1: this.recivedata.options_list1.list_items.name,
          option2: this.recivedata.options_list2.list_items.name,
          sale_price_percentage: this.recivedata.sale_price_percentage,
          sale_avaliable: this.recivedata.sale_avaliable,
          sale_price: {
            price: this.recivedata.sale_price.price,
            currency: this.recivedata.sale_price.currency
          },
          sale_price_text: this.recivedata.sale_price_text,
          regular_price: {
            price: this.recivedata.regular_price.price,
            currency: this.recivedata.regular_price.currency
          },
          regular_price_text: this.recivedata.regular_price_text,
          down_payment: {
            price: this.recivedata.down_payment.price,
            currency: this.recivedata.down_payment.currency
          },
          down_payment_text: this.recivedata.down_payment_text,
          installment: {
            price: this.recivedata.installment.price,
            period: this.recivedata.installment.period,
            currency: this.recivedata.installment.currency
          },
          installment_price_text: this.recivedata.installment_price_text,
          // amount_product: this.recivedata.amount_product,
          "amount_product": 2,
          // shipping: {
          //   shipping_name: this.recivedata.shipping.shipping_name,
          //   shipping_fee: this.recivedata.shipping.shipping_fee,
          //   shipping_currency: this.recivedata.shipping.shipping_currency
          // },
          "shipping": {
            "shipping_name": "kerry",
            "shipping_fee": 50,
            "shipping_currency": "฿"
          },
          // promotions: [
          //   {
          //     gift_type: this.recivedata.promotions.gift_type,
          //     gift_name: this.recivedata.promotions.gift_name,
          //     gift_amount: this.recivedata.promotions.gift_amount
          //   }
          // ],
          "promotions": [
            {
              "gift_type": "ของแถม",
              "gift_name": "หูฟังไร้สาย",
              "gift_amount": 1
            }
          ],
          down_payment_lists: this.recivedata.down_payment_lists,
          periods_lists: this.recivedata.periods_lists
        }
      ]
    }
    console.log(body);
    this.productdetailService.adProductCartList(body).then(value => {
    });
    this.router.navigateByUrl('tabs/cart');
  }
  onPaymentClick(paymentId: any) {
    console.log("onPaymentClick");
    this.router.navigateByUrl('payment/' + paymentId);
  }
  onChatClick() {
    console.log("Chat Bot");
  }


}
