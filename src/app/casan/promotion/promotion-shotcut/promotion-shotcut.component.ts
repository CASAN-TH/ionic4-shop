import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promotion-shotcut',
  templateUrl: './promotion-shotcut.component.html',
  styleUrls: ['./promotion-shotcut.component.scss'],
})
export class PromotionShotcutComponent implements OnInit {

  @Input() recivedata: any
  @Output() openBrand = new EventEmitter();
  @Output() openPromotion = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.recivedata);
  }

  onBrand(categoryId: any, brandId: any) {
    this.openBrand.emit(categoryId + brandId);
  }
  onPromotion(cate2Id: any) {
    this.openPromotion.emit(cate2Id);
  }
}
