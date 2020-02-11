import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressListComponent } from '../../account/address-list/address-list.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  @Input() modalData: any;
  @Input() addAddressData: any;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.addAddressData);
    if (!this.addAddressData) {
      this.addAddressData = {
        "address": {
          "receiver": "name for test",
          "receiverphone": "0999999999",
          "subdistric": "ตำบล",
          "distric": "อำเภอ",
          "province": "จังหวัด",
          "receiveraddress": "test/test test test Home location"
        }
      }
    };
    if (!this.modalData) {
      this.modalData = {
        "address": [
          {
            "receiver": "test name",
            "receiverphone": "0998689898",
            "subdistric": "ตำบล",
            "distric": "อำเภอ",
            "province": "จังหวัด",
            "receiveraddress": "test/test test test Home location"
          }
        ]
      }
    };
  };

  async addresslModal() {
    const modal = await this.modalController.create({
      component: AddressListComponent,
      componentProps: {
        AddressData: this.modalData.address
      }
    });
    return await modal.present();
  }

}
