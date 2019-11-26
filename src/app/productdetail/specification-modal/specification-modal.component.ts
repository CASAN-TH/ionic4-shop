import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specification-modal',
  templateUrl: './specification-modal.component.html',
  styleUrls: ['./specification-modal.component.scss'],
})
export class SpecificationModalComponent implements OnInit {

  @Input() SpecificationData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.SpecificationData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
