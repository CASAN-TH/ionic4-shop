import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phoneno',
  templateUrl: './phoneno.page.html',
  styleUrls: ['./phoneno.page.scss'],
})
export class PhonenoPage implements OnInit {

  constructor(private _location: Location, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this._location.back();
  }

  requestOTP(form){
    console.log(form.value);
    this.router.navigateByUrl('otp');
  }

}
