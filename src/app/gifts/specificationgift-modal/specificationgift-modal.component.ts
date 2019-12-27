import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specificationgift-modal',
  templateUrl: './specificationgift-modal.component.html',
  styleUrls: ['./specificationgift-modal.component.scss'],
})
export class SpecificationgiftModalComponent implements OnInit {

  @Input() SpecificationgiftData: any

  specColorSelected: any;
  specImageSelected: any;
  specVertionSelected: any;

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {

    this.specColorSelected = this.SpecificationgiftData.color
    this.specVertionSelected = this.SpecificationgiftData.version
    this.specImageSelected = this.SpecificationgiftData.image
    console.log(this.SpecificationgiftData.image);

  }

  dismiss() {
    this.modalController.dismiss();
  }

  onspecColorClick(specColorId: any, specImage: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(specColorId);
    this.specColorSelected = specColorId;
    this.SpecificationgiftData.color = specColorId;
    this.SpecificationgiftData.image = specImage;

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
