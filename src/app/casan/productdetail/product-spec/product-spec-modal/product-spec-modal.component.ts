import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-spec-modal',
  templateUrl: './product-spec-modal.component.html',
  styleUrls: ['./product-spec-modal.component.scss'],
})
export class ProductSpecModalComponent implements OnInit {

  specColor: any;
  specSize: any;
  specImages: any;

  @Input() specificationData: any

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.specColor = this.specificationData.options_list1.list_items.name
    this.specSize = this.specificationData.options_list2.list_items.name
    // this.specImages = this.specificationData.image
    console.log(this.specificationData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onspecColorClick(specColorId: any, specImage: any) {
    console.log(specColorId);
    this.specColor = specColorId;
    this.specificationData.options_list1.list_items.name = specColorId;
    // this.specificationData.image = specImage;

  }

  onspecSizeClick(specSizeId: any) {
    console.log(specSizeId);
    this.specSize = specSizeId;
    this.specificationData.options_list2.list_items.name = specSizeId;
  }

  onCartClick() {
    console.log("onCartClick");
    this.modalController.dismiss();
    this.router.navigateByUrl('tabs/cart');
  }
  onPaymentClick(paymentId: any) {
    console.log("onPaymentClick");
    this.modalController.dismiss();
    this.router.navigateByUrl('payment/' + paymentId);
  }

}
