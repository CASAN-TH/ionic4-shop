import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-secondcontact',
  templateUrl: './modal-secondcontact.component.html',
  styleUrls: ['./modal-secondcontact.component.scss'],
})
export class ModalSecondcontactComponent implements OnInit {

  @Input() secondContact: any;

  datalength:any;
  mockup:any = {

  };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.secondContact);
    this.datalength = this.secondContact.secondcontact.length;
    console.log(this.datalength);
  }

  onFinish() {
    this.secondContact.secondcontact.push(this.mockup)
    console.log(this.secondContact);
    this.modalCtrl.dismiss();
  }

}
