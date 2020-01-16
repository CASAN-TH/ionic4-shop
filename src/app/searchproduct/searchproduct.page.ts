import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchproductService } from './searchproduct.service';
import { MenuController } from '@ionic/angular';

import { Location } from '@angular/common';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.page.html',
  styleUrls: ['./searchproduct.page.scss'],
})
export class SearchproductPage implements OnInit {
  
  searchproductData: any;
  selectcheckData: any;

  constructor(
    private router: Router,
    private searchproductService: SearchproductService,
    private _location: Location,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.searchproductService.onSearchproductDataListChanged.subscribe((searchproductDataList: any) => {
      console.log(searchproductDataList);
      this.searchproductData = searchproductDataList;
    })
    this.searchproductService.onMenuDataChanged.subscribe((searchproductDataList: any) => {
      console.log(searchproductDataList);
      this.selectcheckData = searchproductDataList;
    })
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

  onReset() {
    console.log("onReset")
  }
  onConfirm() {
    console.log("onConfirm")
  }


}
