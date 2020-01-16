import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { Location } from '@angular/common';

@Component({
  selector: 'app-footer-selectcheck',
  templateUrl: './footer-selectcheck.page.html',
  styleUrls: ['./footer-selectcheck.page.scss'],
  inputs: ["recivedata"]
})
export class FooterSelectcheckPage implements OnInit {

  @Input() recivedata: any;

  constructor(
    private router: Router,
    private _location: Location,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }

  onCartClick() {
    console.log("onCartClick");
    this.router.navigateByUrl('tabs/cart');
  }

  openMenu() {
    this.menu.open('end');
  }

  onReset() {
    console.log("onReset")
  }
  onConfirm() {
    console.log("onConfirm")
  }

}
