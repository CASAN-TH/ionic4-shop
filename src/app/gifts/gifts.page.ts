import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftsService } from './gifts.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.page.html',
  styleUrls: ['./gifts.page.scss'],
})
export class GiftsPage implements OnInit {
  giftsData: any;

  constructor(private router: Router, private giftsService : GiftsService) { }

  ngOnInit() {
    this.giftsService.onGiftsDataListChanged.subscribe((giftsDataList:any)=>{
      console.log(giftsDataList);
      this.giftsData = giftsDataList;
    })
  }

}
