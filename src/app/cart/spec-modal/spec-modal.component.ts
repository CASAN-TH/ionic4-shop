import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-spec-modal',
  templateUrl: './spec-modal.component.html',
  styleUrls: ['./spec-modal.component.scss'],
})
export class SpecModalComponent implements OnInit {
  reccommentDataList: any;
  constructor(public modalController:ModalController,private cartService: CartService) { }

  ngOnInit() {
    this.cartService.onReccommentDataListChanged.subscribe((reccommentDataList: any) => {
      console.log(reccommentDataList);
      this.reccommentDataList = reccommentDataList;

    })
  }
  dismiss(){
    this.modalController.dismiss();
  }
}
