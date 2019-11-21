import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  homeDataList: any;
  showToolbar = false;
  constructor(private router: Router, private homeService : HomeService) { }

  ngOnInit() {
    this.homeService.onHomeDataListChanged.subscribe((homeDataList:any)=>{
      console.log(homeDataList);
      this.homeDataList = homeDataList;
    })
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 141;
    }
  }
}
