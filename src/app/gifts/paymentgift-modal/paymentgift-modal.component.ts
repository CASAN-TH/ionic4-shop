import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-paymentgift-modal',
  templateUrl: './paymentgift-modal.component.html',
  styleUrls: ['./paymentgift-modal.component.scss'],
})
export class PaymentgiftModalComponent implements OnInit {

  percenSelected: any;
  unitSelected: any

  @Input() PaymentgiftData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {

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
