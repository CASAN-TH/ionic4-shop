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
  termsandconditionData: any;

  constructor(private router: Router, private termsandconditionService : TermsandconditionService, private _location: Location) { }

  ngOnInit() {
    this.termsandconditionService.onTermsandconditionDataChanged.subscribe((termsandconditionData:any)=>{
      console.log(termsandconditionData);
      this.termsandconditionData = termsandconditionData;
    })
  }
  goBackClick() {
    this._location.back();
  }
}
