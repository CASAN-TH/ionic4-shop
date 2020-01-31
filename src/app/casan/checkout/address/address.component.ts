import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAddressComponent } from 'src/app/pages/me/modal-address/modal-address.component';

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
    
  }

  async addresslModal() {
    const modal = await this.modalController.create({
      component: ModalAddressComponent,
      componentProps: {
        AddressData: this.modalData.address
      }
    });
    return await modal.present();
  }

}
