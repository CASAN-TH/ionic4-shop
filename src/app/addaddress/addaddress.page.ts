import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AddaddressService } from './addaddress.service';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.page.html',
  styleUrls: ['./addaddress.page.scss'],
})
export class AddaddressPage implements OnInit {
  addaddressDataList: any;

  constructor(private router: Router, private addaddressService : AddaddressService,private _location: Location) { }

  ngOnInit() {
    this.addaddressService.onAddaddressDataListChanged.subscribe((addaddressDataList:any)=>{
      console.log(addaddressDataList);
      this.addaddressDataList = addaddressDataList;
    })
  }
  goBackClick() {
    this._location.back();
  }
}
