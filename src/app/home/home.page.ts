import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  homeDataList: any;

  constructor(private router: Router, private homeService : HomeService) { }

  ngOnInit() {
    this.homeService.onHomeDataListChanged.subscribe((homeDataList:any)=>{
      console.log(homeDataList);
      this.homeDataList = homeDataList;
    })
  }

}
