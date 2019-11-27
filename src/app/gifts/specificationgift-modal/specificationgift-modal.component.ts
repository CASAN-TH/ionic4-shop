import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specificationgift-modal',
  templateUrl: './specificationgift-modal.component.html',
  styleUrls: ['./specificationgift-modal.component.scss'],
})
export class SpecificationgiftModalComponent implements OnInit {

  @Input() SpecificationgiftData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
