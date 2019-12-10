import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  user: any;
  constructor(private _location: Location, private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user);
      }
    });
  }

  ngOnInit() {
  }

  close() {
    this._location.back();
  }

  next(el) {
    el.setFocus();
  }

  verifyOTP(form) {
    console.log(this.user);
    // this.router.navigateByUrl('password');
    this.nextStep(this.user);
  }

  nextStep(user) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['password'], navigationExtras);
  }

}
