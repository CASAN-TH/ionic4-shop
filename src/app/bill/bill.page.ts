import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from './bill.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  billData: any;
  inx = 0

  constructor(
    private router: Router,
    private billService: BillService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.billService.onBillDataListChanged.subscribe((billData: any) => {
      console.log(billData);
      this.billData = billData;
    })
  }

  onPreviousBill() {
    this.inx -= 1
    // console.log(this.inx)
  }

  onNextBill() {
    this.inx += 1
    // console.log(this.inx)
  }

  goBackClick() {
    this._location.back();
  }

}
