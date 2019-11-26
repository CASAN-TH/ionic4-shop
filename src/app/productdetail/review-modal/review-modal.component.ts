import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent implements OnInit {

  @Input() ReviewData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.ReviewData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
