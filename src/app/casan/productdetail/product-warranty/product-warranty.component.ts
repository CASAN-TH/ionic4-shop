import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-warranty',
  templateUrl: './product-warranty.component.html',
  styleUrls: ['./product-warranty.component.scss'],
})
export class ProductWarrantyComponent implements OnInit {

  @Input() recivedata: any;

  constructor() { }

  ngOnInit() {}

}
