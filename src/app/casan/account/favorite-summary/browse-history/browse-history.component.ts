import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-browse-history',
  templateUrl: './browse-history.component.html',
  styleUrls: ['./browse-history.component.scss'],
})
export class BrowseHistoryComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }


}
