import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  select:any;
  downDataList: any;
  cartDataList: any;

  constructor(private router: Router, private paymentService: PaymentService, private _location: Location) { }

  ngOnInit() {
    this.paymentService.onDownDataListChanged.subscribe((downDataList: any) => {
      console.log(downDataList);
      this.downDataList = downDataList;
    })
    this.paymentService.onCartDataListChanged.subscribe((cartDataList: any) => {
      console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
  }

  goBackClick() {
    this._location.back();
  }

}
