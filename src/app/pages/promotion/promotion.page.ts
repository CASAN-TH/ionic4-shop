import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from './promotion.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {
  promotionData: any;

  constructor(
    private router: Router,
    private promotionService: PromotionService,
    private _location: Location,
    private dom: DomSanitizer
  ) { }

  ngOnInit() {
    this.promotionService.onPromotionDataListChanged.subscribe((promotionDataList: any) => {
      this.promotionData = promotionDataList;

      this.promotionData.link_promotion = this.dom.bypassSecurityTrustResourceUrl(this.promotionData.link_promotion);
      // console.log(this.promotionData.link_promotion);

    })


  }

  goBackClick() {
    this._location.back();
  }

}
