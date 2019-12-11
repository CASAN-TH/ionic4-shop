import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { PayforService } from './payfor.service';

@Component({
  selector: 'app-payfor',
  templateUrl: './payfor.page.html',
  styleUrls: ['./payfor.page.scss'],
})
export class PayforPage implements OnInit {
  payforData: any;

  constructor(private router: Router, private payforService : PayforService, private _location: Location) { }

  ngOnInit() {
    this.payforService.onPayforDataChanged.subscribe((payforDataList:any)=>{
      console.log(payforDataList);
      this.payforData = payforDataList;
    })
  }
  goBackClick() {
    this._location.back();
  }
}
