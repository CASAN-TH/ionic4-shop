import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcoinService } from './tcoin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tcoin',
  templateUrl: './tcoin.page.html',
  styleUrls: ['./tcoin.page.scss'],
})
export class TcoinPage implements OnInit {
  tcoinDataList: any;
  mytcoinDataList: any;
  recommendDataList: any;

  constructor(private router: Router, private tcoinService : TcoinService,
    private _location: Location) { }

  ngOnInit() {
    // this.tcoinService.onTcoinDataListChanged.subscribe((tcoinDataList:any)=>{
    //   console.log(tcoinDataList);
    //   this.tcoinDataList = tcoinDataList;
    // })
    this.tcoinService.onMyTcoinDataChanged.subscribe((mytcoinDataList:any)=>{
      console.log(mytcoinDataList);
      this.mytcoinDataList = mytcoinDataList;
    })
    this.tcoinService.onRecommendDataListChanged.subscribe((recommendDataList:any)=>{
      console.log(recommendDataList);
      this.recommendDataList = recommendDataList;
    })

  }

  onBackClick() {
    this._location.back();
  }

  onToTcoinDetailPage(){
    console.log("onToTcoinDetailPage");
  }

}
