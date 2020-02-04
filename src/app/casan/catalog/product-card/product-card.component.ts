import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() recivedata: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  onProductdetailClick(productId: any) {
    this.router.navigateByUrl("productdetail/" + productId);
  }

}
