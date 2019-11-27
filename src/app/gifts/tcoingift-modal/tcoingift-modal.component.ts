import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tcoingift-modal',
  templateUrl: './tcoingift-modal.component.html',
  styleUrls: ['./tcoingift-modal.component.scss'],
})
export class TcoingiftModalComponent implements OnInit {

  @Input() TcoingiftData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
