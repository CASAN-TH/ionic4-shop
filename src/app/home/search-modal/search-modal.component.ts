import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {

  items: any;
  isItemAvailable: any;

  constructor(
    private router: Router,
    public modalController: ModalController
  ) { this.isItemAvailable = false; }

  ngOnInit() {

  }

  onSearchProduct() {
    this.router.navigateByUrl('searchproduct');
    this.modalController.dismiss();
    console.log("onSearchProduct");
  }

  initializeItems() {
    this.items = ["Ram", "gopi", "dravid"];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
