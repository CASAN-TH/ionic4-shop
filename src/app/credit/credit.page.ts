import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from './credit.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  creditDataList: any;
  creditMenuList: any;
  creditPoint: any
  constructor(private router: Router, private creditService : CreditService) { }

  ngOnInit() {
    this.creditService.onCreditDataListChanged.subscribe((creditDataList:any)=>{
      console.log(creditDataList);
      this.creditDataList = creditDataList;
    });
    this.creditService.onCreditMenuListChanged.subscribe((menu:any)=>{
      console.log(menu);
      this.creditMenuList = menu;
    });
    this.creditService.onCreditPointChanged.subscribe((point:any)=>{
      console.log(point);
      this.creditPoint = point
    })
  }

  onOpenRegCredit(){
    this.router.navigate(['/regcredit'])
  }

}
