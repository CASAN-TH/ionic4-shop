import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Location } from '@angular/common'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {

  searchData: any;
  selectcheckData: any;
  cate2Selected: any;
  brandSelected: any;

  constructor(
    private router: Router, 
    private searchService: SearchService, 
    private _location: Location,
    private menu: MenuController
    ) { }

  ngOnInit() {
    this.searchService.onSearchDataListChanged.subscribe((searchDataList: any) => {
      console.log(searchDataList);
      this.searchData = searchDataList;
    })
    this.searchService.onMenuDataChanged.subscribe((searchDataList: any) => {
      console.log(searchDataList);
      this.selectcheckData = searchDataList;
    })
  }

  onCetegoryClick(cate2Id: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(cate2Id);
    this.cate2Selected = cate2Id;
  }

  onBrandClick(brandId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(brandId);
    this.brandSelected = brandId;
  }

  onProductdetailClick(productId: any) {
    this.router.navigateByUrl('productdetail/' + productId);
  }

  goBackClick() {
    this._location.back();
  }

  onCartClick() {
    console.log("onCartClick");
    this.router.navigateByUrl('tabs/cart');
  }

  openMenu() {
    this.menu.open('end');
  }

  onReset(){
    console.log("onReset")
  }
  onConfirm(){
    console.log("onConfirm")
  }



}
