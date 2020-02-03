import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.scss'],
})
export class ProductSpecComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openSpec = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.recivedata)
   }

  specModal() {
    this.openSpec.emit();
  }


}
