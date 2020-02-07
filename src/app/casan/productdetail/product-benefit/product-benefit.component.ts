import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductVoucherModalComponent } from './product-voucher/product-voucher-modal/product-voucher-modal.component';
import { ProductGiftModalComponent } from './product-gift/product-gift-modal/product-gift-modal.component';
import { ProductTcoinModalComponent } from './product-tcoin/product-tcoin-modal/product-tcoin-modal.component';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';

@Component({
  selector: 'app-product-benefit',
  templateUrl: './product-benefit.component.html',
  styleUrls: ['./product-benefit.component.scss'],
})
export class ProductBenefitComponent implements OnInit {

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {

  }
}
