import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-imformation-spec',
  templateUrl: './product-imformation-spec.component.html',
  styleUrls: ['./product-imformation-spec.component.scss'],
})
export class ProductImformationSpecComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openImformationSpec = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  imformationSpecModal() {
    this.openImformationSpec.emit();
  }

}
