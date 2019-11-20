import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartDataList: any;
  reccommentDataList: any;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.onCartDataListChanged.subscribe((cartDataList: any) => {
      console.log(cartDataList);
      this.cartDataList = cartDataList;
    })
    this.cartService.onReccommentDataListChanged.subscribe((reccommentDataList: any) => {
      console.log(reccommentDataList);
      this.reccommentDataList = reccommentDataList;

    })
  }

}
