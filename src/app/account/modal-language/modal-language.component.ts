import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-language',
  templateUrl: './modal-language.component.html',
  styleUrls: ['./modal-language.component.scss'],
})
export class ModalLanguageComponent implements OnInit {

  constructor( public modalController: ModalController,
    private router: Router) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

  OnsaveLanguage() {
    console.log("OnsaveLanguage");
  }

}
