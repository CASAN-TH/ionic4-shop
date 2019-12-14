import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent implements OnInit {

  @Input() ReviewData: any
  showToolbar = false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.ReviewData);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 200;
    }
  }

}
