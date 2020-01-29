import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-empty',
  templateUrl: './cart-empty.component.html',
  styleUrls: ['./cart-empty.component.scss'],
})
export class CartEmptyComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  onShoppingClick() {
    this.router.navigate(['/tabs/category'])
  }
}
