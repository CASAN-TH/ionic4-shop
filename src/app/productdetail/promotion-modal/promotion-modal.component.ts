import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss'],
})
export class PromotionModalComponent implements OnInit {

  @Input() PromotionData: any

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    console.log(this.PromotionData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onGiftsClick(giftId: any) {
    console.log(giftId);
    this.modalController.dismiss();
    this.router.navigateByUrl('gifts/' + giftId);
  }

}
