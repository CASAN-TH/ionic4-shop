import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imformationspec-modal',
  templateUrl: './imformationspec-modal.component.html',
  styleUrls: ['./imformationspec-modal.component.scss'],
})
export class ImformationspecModalComponent implements OnInit {

  @Input() ImformationSpecData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.ImformationSpecData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
