import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductReviewsModalComponent } from './product-reviews-modal/product-reviews-modal.component';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent implements OnInit {
  
  reviewData: any
  // @Input() recivedata: any;
  // @Output() openReviews = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() { 
    this.productdetailService.onReviewDataChanged.subscribe((productdetailDataList: any) => {
      this.reviewData = productdetailDataList;
    })
  }

  // reviewsModal() {
  //   this.openReviews.emit();
  // }

  async openReviewsModal() {
    const modal = await this.modalController.create({
      component: ProductReviewsModalComponent,
      componentProps: {
        reviewData: this.reviewData
      }
    });
    return await modal.present();
  }

}
