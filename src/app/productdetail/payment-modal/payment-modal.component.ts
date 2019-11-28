import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent implements OnInit {

  percenSelected: any;
  unitSelected: any;

  @Input() PaymentData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.PaymentData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onPercenClick(percenId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(percenId);
    this.percenSelected = percenId;
  }

  onUnitClick(unitId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(unitId);
    this.unitSelected = unitId;
  }

  onPayClick() {
    console.log("onPayClick");
  }

}
