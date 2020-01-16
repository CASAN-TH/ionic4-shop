import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TcoinService } from './tcoin.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalTcoinDetailComponent } from './modal-tcoin-detail/modal-tcoin-detail.component';

@Component({
  selector: 'app-tcoin',
  templateUrl: './tcoin.page.html',
  styleUrls: ['./tcoin.page.scss'],
})
export class TcoinPage implements OnInit {
  tcoinDataList: any;
  mytcoinDataList: any;
  recommendDataList: any;
  mytcoinData: any;
  tcoinDetailData: any;

  constructor(private router: Router, private tcoinService : TcoinService,
    private _location: Location, public modalController: ModalController) { }

  ngOnInit() {
    // this.tcoinService.onTcoinDataListChanged.subscribe((tcoinDataList:any)=>{
    //   console.log(tcoinDataList);
    //   this.tcoinDataList = tcoinDataList;
    // })
    this.tcoinService.onMyTcoinDataChanged.subscribe((mytcoinDataList:any)=>{
      console.log(mytcoinDataList);
      this.mytcoinDataList = mytcoinDataList;
      this.mytcoinData = mytcoinDataList.mytcoin;
    })
    this.tcoinService.onRecommendDataListChanged.subscribe((recommendDataList:any)=>{
      console.log(recommendDataList);
      this.recommendDataList = recommendDataList;
    })
    this.tcoinService.onMyTcoinDetailDataChanged.subscribe((tcoinDetailData:any)=>{
      console.log(tcoinDetailData);
      this.tcoinDetailData = tcoinDetailData;
    })

  }

  onBackClick() {
    this._location.back();
  }

  onToTcoinDetailPage(){
    console.log("onToTcoinDetailPage");
  }

  async TcoinDetailModal() {
    const modal = await this.modalController.create({
      component: ModalTcoinDetailComponent,
      componentProps: {
        TcoinData: this.mytcoinData,
        TcoinDetailData: this.tcoinDetailData
      }
    });
    return await modal.present();
  }

}
