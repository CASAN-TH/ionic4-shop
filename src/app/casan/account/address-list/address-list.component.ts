import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {

  @Input() AddressData: any

  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.AddressData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

  onEditAddress() {
    console.log("onEditAddress");
  }

  onAddNewAddress() {
    this.router.navigate(['addaddress']);
    this.modalController.dismiss();
  }

  onDeleteAddress() {
    console.log("onDeleteAddress");
  }

}
