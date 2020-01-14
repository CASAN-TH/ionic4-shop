import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent implements OnInit {

  @Input() ShareData: any;

  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.ShareData)
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onShareSocial(id: any) {
    console.log("onShare/" + id);
    // this.router.navigateByUrl(id);
  }

  onColse() {
    console.log("onColse");
  }

}
