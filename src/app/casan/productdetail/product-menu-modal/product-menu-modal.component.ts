import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-product-menu-modal',
  templateUrl: './product-menu-modal.component.html',
  styleUrls: ['./product-menu-modal.component.scss'],
})
export class ProductMenuModalComponent implements OnInit {

  constructor(
    private router: Router,
    public popoverController: PopoverController
    ) { }

  ngOnInit() { }

  onHomeClick() {
    this.router.navigateByUrl('/tabs/home');
    this.popoverController.dismiss();
  }
  onCallcenterClick() {
    this.router.navigateByUrl('/callcenter');
    this.popoverController.dismiss();
  }

}
