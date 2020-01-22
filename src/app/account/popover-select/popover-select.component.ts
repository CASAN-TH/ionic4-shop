import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popover-select',
  templateUrl: './popover-select.component.html',
  styleUrls: ['./popover-select.component.scss'],
})
export class PopoverSelectComponent implements OnInit {

  constructor(
    private router: Router,
    public popoverController: PopoverController,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  onMessagePageClick() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/message');
    this.popoverController.dismiss();
    
  }

  onHomePageClick() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/tabs/home');
    this.popoverController.dismiss();
  }

  onCallcenterPageClick() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/callcenter');
    this.popoverController.dismiss();
  }


}
