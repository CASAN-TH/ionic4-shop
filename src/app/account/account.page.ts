import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  accountDataList: any;
  accountData: any;

  constructor(private router: Router, private accountService : AccountService) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  ngOnInit() {
    this.accountService.onAccountDataListChanged.subscribe((accountDataList:any)=>{
      console.log(accountDataList);
      this.accountDataList = accountDataList;
    })
    this.accountService.onAccountData2Changed.subscribe((accountData)=>{
      console.log(accountData);
      this.accountData = accountData;
    })
  }

  onToOpenMePage() {
    this.router.navigate(['me']);
    
  }


}
