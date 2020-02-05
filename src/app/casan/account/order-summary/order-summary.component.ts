import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderHistoryComponent } from './order-history/order-history.component';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  CartDataList: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  async ModalViewAllMyOrdersPage() {
    const value = 0
    const modal = await this.modalController.create({
      component: OrderHistoryComponent,
      componentProps: {
        CartDataList: this.CartDataList,
        Tabs: value
      }
    });
    return await modal.present();
  }

  async ModalPayViewAllMyOrdersPage() {
    const value = 1
    const modal = await this.modalController.create({
      component: OrderHistoryComponent,
      componentProps: {
        CartDataList: this.CartDataList,
        Tabs: value
      }
    });
    return await modal.present();
  }

  async ModalShipViewAllMyOrdersPage() {
    const value = 2
    const modal = await this.modalController.create({
      component: OrderHistoryComponent,
      componentProps: {
        CartDataList: this.CartDataList,
        Tabs: value
      }
    });
    return await modal.present();
  }

  async ModalRecieveViewAllMyOrdersPage() {
    const value = 3
    const modal = await this.modalController.create({
      component: OrderHistoryComponent,
      componentProps: {
        CartDataList: this.CartDataList,
        Tabs: value
      }
    });
    return await modal.present();
  }

  async ModalReviewsViewAllMyOrdersPage() {
    const value = 4
    const modal = await this.modalController.create({
      component: OrderHistoryComponent,
      componentProps: {
        CartDataList: this.CartDataList,
        Tabs: value
      }
    });
    return await modal.present();
  }

}
