import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-myorder',
  templateUrl: './modal-myorder.component.html',
  styleUrls: ['./modal-myorder.component.scss'],
})
export class ModalMyorderComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

    

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

  ToSearchPage(){
    this.router.navigate(["search-history"]);
    this.modalController.dismiss();
  }

}
