import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.scss'],
})
export class ModalAboutComponent implements OnInit {

  @Input() AboutData: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.AboutData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }


}
