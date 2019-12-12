import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
  inputs: ["recivedata"]
})
export class ProductlistPage implements OnInit {

  @Input() recivedata: Array<any>

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProductdetailClick(productId: any) {
    this.router.navigateByUrl('productdetail/' + productId);
  }

}
