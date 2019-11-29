import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phoneno',
  templateUrl: './phoneno.page.html',
  styleUrls: ['./phoneno.page.scss'],
})
export class PhonenoPage implements OnInit {

  params: any;
  constructor(private _location: Location,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.params = this.router.getCurrentNavigation().extras.state;
        console.log(this.params);
      }
    });
  }

  ngOnInit() {
  }

  close() {
    this._location.back();
  }

  requestOTP(form) {
    console.log(form.value);
    //this.router.navigateByUrl('otp');
    let user = {
      username : form.value.username,
      provider : this.params ? this.params.provider : "local",
      providerData : this.params ? this.params.providerData : null
    }
    this.nextStep(user);
  }

  nextStep(user) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    this.router.navigate(['otp'], navigationExtras);
  }

}
