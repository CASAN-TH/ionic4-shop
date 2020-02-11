import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-brands',
  templateUrl: './search-brands.component.html',
  styleUrls: ['./search-brands.component.scss'],
})
export class SearchBrandsComponent implements OnInit {

  brandSelected: any;
  @Input() recivedata: any
  // @Output() openBrand = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  // onBrandClick(brandId: any) {
  //   this.brandSelected = brandId;
  //   this.openBrand.emit(brandId);
  // }
  onBrandClick(brandId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(brandId);
    this.brandSelected = brandId;
  }

}
