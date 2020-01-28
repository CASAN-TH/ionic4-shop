import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specification-modal',
  templateUrl: './specification-modal.component.html',
  styleUrls: ['./specification-modal.component.scss'],
})
export class SpecificationModalComponent implements OnInit {

  specColor: any;
  specSize: any;
  specImages: any;

  @Input() SpecificationData: any

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.specColor = this.SpecificationData.options_list1.list_items.name
    this.specSize = this.SpecificationData.options_list2.list_items.name
    // this.specImages = this.SpecificationData.image
    // console.log(this.SpecificationData.image);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onspecColorClick(specColorId: any, specImage: any) {
    console.log(specColorId);
    this.specColor = specColorId;
    this.SpecificationData.options_list1.list_items.name = specColorId;
    // this.SpecificationData.image = specImage;

  }

  onspecVertionClick(specSizeId: any) {
    console.log(specSizeId);
    this.specSize = specSizeId;
    this.SpecificationData.options_list2.list_items.name = specSizeId;
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
