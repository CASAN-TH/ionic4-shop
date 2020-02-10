import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent implements OnInit {
  
  @Input() recivedata: any;
  @Output() openReviews = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  reviewsModal() {
    this.openReviews.emit();
  }

}
