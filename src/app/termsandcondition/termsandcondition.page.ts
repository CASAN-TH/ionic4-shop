import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { TermsandconditionService } from './termsandcondition.service';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.page.html',
  styleUrls: ['./termsandcondition.page.scss'],
})
export class TermsandconditionPage implements OnInit {
  termsandconditionDataList: any;

  constructor(private router: Router, private termsandconditionService : TermsandconditionService, private _location: Location) { }

  ngOnInit() {
    this.termsandconditionService.onTermsandconditionDataListChanged.subscribe((termsandconditionDataList:any)=>{
      console.log(termsandconditionDataList);
      this.termsandconditionDataList = termsandconditionDataList;
    })
  }
  goBackClick() {
    this._location.back();
  }
}
