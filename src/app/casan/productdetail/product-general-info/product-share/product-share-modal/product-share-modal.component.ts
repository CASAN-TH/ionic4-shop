import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-share-modal',
  templateUrl: './product-share-modal.component.html',
  styleUrls: ['./product-share-modal.component.scss'],
})
export class ProductShareModalComponent implements OnInit {

  @Input() shareData: any;

  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.shareData)
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onShareSocial(id: any) {
    console.log("onShare/" + id);
    // this.router.navigateByUrl(id);
  }

  onColse() {
    this.modalController.dismiss();
  }

}
