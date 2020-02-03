import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-gift-modal',
  templateUrl: './product-gift-modal.component.html',
  styleUrls: ['./product-gift-modal.component.scss'],
})
export class ProductGiftModalComponent implements OnInit {

  @Input() promotiongiftData: any

  constructor(
    public modalController: ModalController,
    private router: Router) { }

  ngOnInit() {
    console.log(this.promotiongiftData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onGifts(giftId: any) {
    console.log(giftId);
    this.modalController.dismiss();
    this.router.navigateByUrl('gifts/' + giftId);
  }

}
