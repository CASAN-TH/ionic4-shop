import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selectdown-modal',
  templateUrl: './selectdown-modal.component.html',
  styleUrls: ['./selectdown-modal.component.scss'],
})
export class SelectdownModalComponent implements OnInit {
  @Input() selectdownData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }
}
