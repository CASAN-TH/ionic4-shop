import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductPaymentModalComponent } from './product-payment-modal/product-payment-modal.component';

@Component({
  selector: 'app-product-payment',
  templateUrl: './product-payment.component.html',
  styleUrls: ['./product-payment.component.scss'],
})
export class ProductPaymentComponent implements OnInit {

  paymentData: any
  // @Input() recivedata: any;
  // @Output() openPayment = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() { 
    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      this.paymentData = productdetailDataList;
    })
  }

  // paymentModal() {
  //   this.openPayment.emit();
  // }

  async openPaymentModal() {
    const modal = await this.modalController.create({
      component: ProductPaymentModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        paymentData: this.paymentData
      }
    });
    return await modal.present();
  }

}
