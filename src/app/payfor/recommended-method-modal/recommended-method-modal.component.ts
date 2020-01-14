import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common'

@Component({
  selector: 'app-recommended-method-modal',
  templateUrl: './recommended-method-modal.component.html',
  styleUrls: ['./recommended-method-modal.component.scss'],
})
export class RecommendedMethodModalComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    private _location: Location
    ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  onPayment(){
    this._location.back();
    this.modalController.dismiss();
  }

}
