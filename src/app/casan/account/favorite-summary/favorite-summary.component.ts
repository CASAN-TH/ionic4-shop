import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFavoriteComponent } from 'src/app/account/modal-favorite/modal-favorite.component';
import { ModalFollowedshopComponent } from 'src/app/account/modal-followedshop/modal-followedshop.component';
import { ModalBrowsehistoryComponent } from 'src/app/account/modal-browsehistory/modal-browsehistory.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FollowedShopComponent } from './followed-shop/followed-shop.component';
import { BrowseHistoryComponent } from './browse-history/browse-history.component';

@Component({
  selector: 'app-favorite-summary',
  templateUrl: './favorite-summary.component.html',
  styleUrls: ['./favorite-summary.component.scss'],
})
export class FavoriteSummaryComponent implements OnInit {

 @Input() accountData: any;
 @Input() scoreData: any;

  recommendDataList: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {

  }

  async ModalFavorite() {
    const modal = await this.modalController.create({
      component: WishListComponent,

    });
    return await modal.present();
  }

  async ModalFollowedshop() {
    const modal = await this.modalController.create({
      component: FollowedShopComponent,
    });
    return await modal.present();
  }

  async ModalBrowsehistory() {
    const modal = await this.modalController.create({
      component: BrowseHistoryComponent,
    });
    return await modal.present();
  }

}
