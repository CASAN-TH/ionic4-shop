import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss'],
})
export class SelectMenuComponent implements OnInit {

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
