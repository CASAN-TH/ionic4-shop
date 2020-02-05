
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SearchHistoryComponent } from '../search-history/search-history.component';
import { PopoverSelectComponent } from 'src/app/casan/account/order-summary/popover-select/popover-select.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {

  @Input() Tabs: any;

  constructor(
    private router: Router,
    public modalController: ModalController,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

  ToHomePage() {
    this.modalController.dismiss();
    this.router.navigate(["tabs/home"]);
  }

  async ToSearchPage() {
    const modal = await this.modalController.create({
      component: SearchHistoryComponent,

    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverSelectComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
