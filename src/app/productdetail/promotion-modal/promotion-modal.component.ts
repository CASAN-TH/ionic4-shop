import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss'],
})
export class PromotionModalComponent implements OnInit {

  @Input() PromotionData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.PromotionData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
