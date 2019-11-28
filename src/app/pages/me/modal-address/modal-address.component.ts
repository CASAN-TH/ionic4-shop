import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-address',
  templateUrl: './modal-address.component.html',
  styleUrls: ['./modal-address.component.scss'],
})
export class ModalAddressComponent implements OnInit {

  @Input() AddressData: any

  constructor(
    public modalController: ModalController,
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

  onDeleteAddress(){
    console.log("onDeleteAddress");
  }

}
