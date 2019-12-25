import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.scss'],
})
export class BankModalComponent implements OnInit {

  @Input() BankData: any;
  BankSelectedId: any;
  BankSelected: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.BankSelected = this.BankData.Bankname
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onSelectBankClick(SelectBankId: any, BanknameId: any) {
    this.modalController.dismiss();
    this.BankSelectedId = SelectBankId;
    this.BankData.Bankname = BanknameId;
    console.log(this.BankSelectedId);
  }
}
