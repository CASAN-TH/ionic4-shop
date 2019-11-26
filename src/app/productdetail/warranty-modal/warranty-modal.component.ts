import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-warranty-modal',
  templateUrl: './warranty-modal.component.html',
  styleUrls: ['./warranty-modal.component.scss'],
})
export class WarrantyModalComponent implements OnInit {

  @Input() WarrantyData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.WarrantyData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
