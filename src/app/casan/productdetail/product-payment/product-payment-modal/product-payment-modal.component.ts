import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-payment-modal',
  templateUrl: './product-payment-modal.component.html',
  styleUrls: ['./product-payment-modal.component.scss'],
})
export class ProductPaymentModalComponent implements OnInit {

  percenSelected: any;
  unitSelected: any;

  @Input() PaymentData: any

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    console.log(this.PaymentData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onPercenClick(percen: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(percen);
    this.percenSelected = percen;
  }

  onUnitClick(unit: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(unit);
    this.unitSelected = unit;
  }

  onPayClick() {
    console.log("onPayClick");
    this.modalController.dismiss();
    this.router.navigateByUrl('payment');
  }
}
