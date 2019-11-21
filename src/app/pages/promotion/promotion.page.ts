import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from './promotion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {
  promotionDataList: any;

  constructor(private router: Router, private promotionService: PromotionService, private _location: Location) { }

  ngOnInit() {
    this.promotionService.onPromotionDataListChanged.subscribe((promotionDataList: any) => {
      console.log(promotionDataList);
      this.promotionDataList = promotionDataList;
    })
  }

  goBackClick() {
    this._location.back();
  }

}
