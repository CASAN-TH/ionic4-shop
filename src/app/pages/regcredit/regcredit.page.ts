import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegcreditService } from './regcredit.service';

@Component({
  selector: 'app-regcredit',
  templateUrl: './regcredit.page.html',
  styleUrls: ['./regcredit.page.scss'],
})
export class RegcreditPage implements OnInit {
  regcreditDataList: any;
  regProfile: any;
  dataSecondContact: any;

  
  constructor(private router: Router, private regcreditService : RegcreditService) { }

  ngOnInit() {
    this.regcreditService.onRegcreditDataListChanged.subscribe((regcreditDataList:any)=>{
      console.log(regcreditDataList);
      this.regcreditDataList = regcreditDataList;
    })
    this.regcreditService.onRegcreditProfileChanged.subscribe((dataProfile:any)=>{
      console.log(dataProfile)
      this.regProfile = dataProfile
    })
    this.regcreditService.onRegcreditSecondContactChanged.subscribe((dataSecondContact: any)=>{
      console.log(dataSecondContact)
      this.dataSecondContact = dataSecondContact
    })
  }

}
