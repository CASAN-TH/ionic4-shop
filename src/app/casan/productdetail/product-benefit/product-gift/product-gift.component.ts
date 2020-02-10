import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-gift',
  templateUrl: './product-gift.component.html',
  styleUrls: ['./product-gift.component.scss'],
})
export class ProductGiftComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openpromotionGift = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.recivedata);
   }

  promotiongiftModal() {
    this.openpromotionGift.emit();
  }

}
