import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.scss'],
})
export class ProductServiceComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openService = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.recivedata)
   }

  serviceModal() {
    this.openService.emit();
  }

}
