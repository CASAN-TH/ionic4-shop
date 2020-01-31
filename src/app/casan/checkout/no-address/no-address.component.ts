import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-address',
  templateUrl: './no-address.component.html',
  styleUrls: ['./no-address.component.scss'],
})
export class NoAddressComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  onAddaddressClick() {
    this.router.navigate(['addaddress'])
  }

}
