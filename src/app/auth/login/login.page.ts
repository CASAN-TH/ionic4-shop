import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _location: Location, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this._location.back();
  }

  login(form) {
    this.auth.login(form.value).then((user)=>{
      if(this.auth.redirectUrl){
        this.router.navigateByUrl(this.auth.redirectUrl);
      }else{
        this.router.navigateByUrl('');
      }
    });
  }

  gotoForgot() {
    this.router.navigateByUrl('phoneno')
  }

  gotoRegister(){
    this.router.navigateByUrl('phoneno');
  }


}
