import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-select-check',
  templateUrl: './menu-select-check.component.html',
  styleUrls: ['./menu-select-check.component.scss'],
})
export class MenuSelectCheckComponent implements OnInit {

  @Input() recivedata: any;
  // @Output() openCategories = new EventEmitter();
  // @Output() openBrands = new EventEmitter();
  // @Output() openPriceranges = new EventEmitter();

  constructor() { }

  ngOnInit() { }


  // onCategories(selectcheckId: any) {
  //   this.openCategories.emit(selectcheckId);
  // }
  // onBrands(selectcheckId: any) {
  //   this.openBrands.emit(selectcheckId);
  // }
  // onPriceranges(selectcheckId: any) {
  //   this.openPriceranges.emit(selectcheckId);
  // }

  onCategories(selectcheckId: any) {
    console.log("onCategories" + selectcheckId);
  }
  onBrands(selectcheckId: any) {
    console.log("onBrands" + selectcheckId);
  }
  onPriceranges(selectcheckId: any) {
    console.log("onPriceranges" + selectcheckId);
  }

}
