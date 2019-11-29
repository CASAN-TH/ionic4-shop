import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-spec-modal',
  templateUrl: './spec-modal.component.html',
  styleUrls: ['./spec-modal.component.scss'],
})
export class SpecModalComponent implements OnInit {
  
  SpecificationData: any;
  constructor(public modalController:ModalController,private cartService: CartService,private _location: Location) { }

  ngOnInit() {

   
  }
  dismiss(){
    this.modalController.dismiss();
  }
  onSave(){
    this._location.back();
  }
}
