import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-general-info',
  templateUrl: './product-general-info.component.html',
  styleUrls: ['./product-general-info.component.scss'],
})
export class ProductGeneralInfoComponent implements OnInit {

  @Input() recivedata: any

  constructor() { }

  ngOnInit() {}

}
