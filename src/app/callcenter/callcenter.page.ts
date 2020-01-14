import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallcenterService } from './callcenter.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-callcenter',
  templateUrl: './callcenter.page.html',
  styleUrls: ['./callcenter.page.scss'],
})
export class CallcenterPage implements OnInit {
  callcenterData: any;

  constructor(
    private router: Router,
    private callcenterService: CallcenterService,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.callcenterService.onCallcenterDataListChanged.subscribe((callcenterDataList: any) => {
      console.log(callcenterDataList);
      this.callcenterData = callcenterDataList;
      console.log(this.callcenterData);
      // console.log(this.callcenterData.contacts.name);
    })
  }

  goBackClick() {
    this._location.back();
  }

  onFackbookclick() {
    console.log("onFackbookclick");
  }
  onLineclick() {
    console.log("onLineclick");
  }

}
