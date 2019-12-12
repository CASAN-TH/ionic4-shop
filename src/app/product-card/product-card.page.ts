import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "product-card",
  templateUrl: "./product-card.page.html",
  styleUrls: ["./product-card.page.scss"],
  inputs: ["recivedata"]
})
export class ProductCardPage implements OnInit {
  @Input() recivedata: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  onProductdetailClick(productId: any) {
    this.router.navigateByUrl("productdetail/" + productId);
  }
}
