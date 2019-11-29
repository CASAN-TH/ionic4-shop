import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
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

  signUp(form) {
    this.user.password = form.value.password;
    if(this.user.provider === "local"){
      this.user.firstname = "unknow";
      this.user.lastname = "unknow";
      this.user.email = this.user.username + "@mail.com";
    }
    if(this.user.provider === "line"){
      this.user.firstname = this.user.providerData.displayName;
      this.user.lastname = ".";
      this.user.email = this.user.providerData.email;
    }
    if(this.user.provider === "facebook"){
      this.user.firstname = this.user.providerData.first_name;
      this.user.lastname = this.user.providerData.last_name;
      this.user.email = this.user.username + "@mail.com";
    }
    console.log(this.user);
  
    this.auth.signup(this.user).then((user) => {
      if (this.auth.redirectUrl) {
        this.router.navigateByUrl(this.auth.redirectUrl);
      } else {
        this.router.navigateByUrl('');
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
