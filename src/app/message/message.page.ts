import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageDataList: any;
  recommendDataList: any;

  constructor(private router: Router, private messageService : MessageService,
    private _location: Location,) { }

  ngOnInit() {
    this.messageService.onMessageDataListChanged.subscribe((messageDataList:any)=>{
      console.log(messageDataList);
      this.messageDataList = messageDataList;
    })
    this.messageService.onRecommendDataListChanged.subscribe((recommendDataList:any)=>{
      console.log(recommendDataList);
      this.recommendDataList = recommendDataList;
    })
  }

  onBackClick() {
    this._location.back();
  }

}
