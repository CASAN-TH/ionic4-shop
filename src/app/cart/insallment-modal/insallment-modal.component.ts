import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insallment-modal',
  templateUrl: './insallment-modal.component.html',
  styleUrls: ['./insallment-modal.component.scss'],
})
export class InsallmentModalComponent implements OnInit {
  percenSelected: any;
  unitSelected: any;
  PaymentData: any
  constructor(public modalController:ModalController,private router: Router) { }

  ngOnInit() {}
  
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
    this.modalController.dismiss();
    this.router.navigateByUrl('payment');
  }
}
