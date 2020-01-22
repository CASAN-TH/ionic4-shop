import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpcenterService } from './helpcenter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.page.html',
  styleUrls: ['./helpcenter.page.scss'],
})
export class HelpcenterPage implements OnInit {
  helpcenterDataList: any;

  constructor(private router: Router, private helpcenterService : HelpcenterService,
    private _location: Location) { }

  ngOnInit() {
    this.helpcenterService.onHelpcenterDataListChanged.subscribe((helpcenterDataList:any)=>{
      console.log(helpcenterDataList);
      this.helpcenterDataList = helpcenterDataList;
    })
  }

  onBackClick() {
    this._location.back();
  }

}
