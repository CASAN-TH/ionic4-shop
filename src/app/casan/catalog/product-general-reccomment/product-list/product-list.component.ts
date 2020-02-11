import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() recivedata: any;
  // @Output() onProductClick = new EventEmitter();
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  // onProductdetailClick(productId: any) {
  //   this.onProductClick.emit(productId);
  // }

  onProductClick(productId) {
    this.router.navigateByUrl('/productdetail/' + productId)
  }

}
