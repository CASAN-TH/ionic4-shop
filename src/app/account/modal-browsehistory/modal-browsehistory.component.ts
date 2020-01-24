import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-browsehistory',
  templateUrl: './modal-browsehistory.component.html',
  styleUrls: ['./modal-browsehistory.component.scss'],
})
export class ModalBrowsehistoryComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }


}
