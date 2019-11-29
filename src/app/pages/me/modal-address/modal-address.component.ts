import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-address',
  templateUrl: './modal-address.component.html',
  styleUrls: ['./modal-address.component.scss'],
})
export class ModalAddressComponent implements OnInit {

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

  onEditAddress(){
    console.log("onEditAddress");
  }

  onAddNewAddress(){
    console.log("onAddNewAddress");
  }

  onDeleteAddress(){
    console.log("onDeleteAddress");
  }

}
