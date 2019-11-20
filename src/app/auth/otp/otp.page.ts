import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(private _location: Location, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  close() {
    this._location.back();
  }

}
