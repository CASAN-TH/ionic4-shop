import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-myorder',
  templateUrl: './modal-myorder.component.html',
  styleUrls: ['./modal-myorder.component.scss'],
})
export class ModalMyorderComponent implements OnInit {

  @Input() CartDataList: any;
  @Input() Tabs: any;


  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }



  ngOnInit() {
    console.log(this.CartDataList);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

  ToSearchPage() {
    this.router.navigate(["search-history"]);
    this.modalController.dismiss();
  }

  ToHomePage() {
    this.modalController.dismiss();
    this.router.navigate(["tabs/home"]);
  }

  onToSettingPage() {
    console.log("onToSettingPage");
  }

}
