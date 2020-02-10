import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-tcoin',
  templateUrl: './product-tcoin.component.html',
  styleUrls: ['./product-tcoin.component.scss'],
})
export class ProductTcoinComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openTcoin = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() { }

  tcoinModal() {
    this.openTcoin.emit();
  }

}
