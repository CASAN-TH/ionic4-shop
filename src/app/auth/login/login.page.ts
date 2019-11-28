import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { LineLogin } from '@ionic-native/line-login/ngx'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _location: Location,
    private auth: AuthService,
    private router: Router,
    private fb: Facebook,
    private lineLogin: LineLogin
  ) { }

  ngOnInit() {
  }

  close() {
    this._location.back();
  }

  login(form) {
    this.auth.signin(form.value).then((user) => {
      if (this.auth.redirectUrl) {
        this.router.navigateByUrl(this.auth.redirectUrl);
      } else {
        this.router.navigateByUrl('');
      }
    });
  }

  gotoForgot() {
    this.router.navigateByUrl('phoneno')
  }

  gotoRegister() {
    this.router.navigateByUrl('phoneno');
  }

  onFacbookLoginClick() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.fb.api('/me?fields=id,first_name,last_name,picture.width(300).height(300)', []).then((user) => {
          this.auth.facebookLogin(user).then(()=>{
            if (this.auth.redirectUrl) {
              this.router.navigateByUrl(this.auth.redirectUrl);
            } else {
              this.router.navigateByUrl('');
            }
          }).catch(()=>{
            this.router.navigateByUrl('phoneno');
          })
        });
      })
      .catch(err => alert(JSON.stringify(err)));

  }

  onLineLoginClick() {
    this.lineLogin.initialize({ channel_id: "1653562528" })
    this.lineLogin.login()
      .then(user => {
        this.auth.lineLogin(user).then(()=>{
          if (this.auth.redirectUrl) {
            this.router.navigateByUrl(this.auth.redirectUrl);
          } else {
            this.router.navigateByUrl('');
          }
        }).catch(()=>{
          this.router.navigateByUrl('phoneno');
        })
      })
      .catch(error => console.log(error))
  }

}
