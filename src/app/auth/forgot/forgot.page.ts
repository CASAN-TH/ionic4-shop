import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(private _location: Location, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  close() {
    this._location.back();
  }

}
