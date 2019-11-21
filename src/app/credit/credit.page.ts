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

  constructor(private router: Router, private creditService : CreditService) { }

  ngOnInit() {
    this.creditService.onCreditDataListChanged.subscribe((creditDataList:any)=>{
      console.log(creditDataList);
      this.creditDataList = creditDataList;
    })
  }

  onOpenRegCredit(){
    this.router.navigate(['/regcredit'])
  }

}
