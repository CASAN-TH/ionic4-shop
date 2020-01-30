import { ScrollDetail } from '@ionic/core';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-reviews-modal',
  templateUrl: './product-reviews-modal.component.html',
  styleUrls: ['./product-reviews-modal.component.scss'],
})
export class ProductReviewsModalComponent implements OnInit {

  @Input() ReviewData: any
  showToolbar = false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.ReviewData);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 200;
    }
  }

}
