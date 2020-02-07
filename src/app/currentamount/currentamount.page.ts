import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentamountService } from './currentamount.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currentamount',
  templateUrl: './currentamount.page.html',
  styleUrls: ['./currentamount.page.scss'],
})
export class CurrentamountPage implements OnInit {
  
  currentamountDataList: any;
  accountData: any;
  currentamountData: any;

  constructor(private router: Router, private currentamountService : CurrentamountService,
    private _location: Location) { }

  ngOnInit() {
    // this.currentamountService.onCurrentamountDataListChanged.subscribe((currentamountDataList:any)=>{
    //   console.log(currentamountDataList);
    //   this.currentamountDataList = currentamountDataList;
    // })
    this.currentamountService.onAccountDataChanged.subscribe((accountData) => {
      console.log(accountData);
      this.accountData = accountData;
    })
    this.currentamountService.onCurrentAmountDataChanged.subscribe((currentamountData) => {
      console.log(currentamountData);
      this.currentamountData = currentamountData;
    })
  }

  onBackClick() {
    this._location.back();
  }

}
