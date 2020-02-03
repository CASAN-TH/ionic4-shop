import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.scss'],
})
export class CheckoutProductComponent implements OnInit {

  @Input() cartDataList: any;
  constructor() { }

  ngOnInit() {

  }

  onOpenlistClick() {
    console.log("onOpenlistClick");
  }

}
