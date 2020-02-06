import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() recivedata: any

  @Output() openSlide = new EventEmitter();
  @Output() openBrand = new EventEmitter();
  @Output() openBrand1 = new EventEmitter();
  @Output() openPromotion = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onCoverImage(i: any, j: any) {
    this.openSlide.emit(i + j);
  }
  onBrandClick(categoryId: any, brandId: any) {
    this.openBrand.emit({categoryId :categoryId, brandId: brandId});
  }
  onPromotionClick(cate2Id: any) {
    this.openPromotion.emit(cate2Id);
  }
}
