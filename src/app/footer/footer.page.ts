import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  inputs: ["recivedata"]
})
export class FooterPage implements OnInit {

  @Input() recivedata: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCartClick() {
    console.log("onCartClick");
    this.router.navigateByUrl('tabs/cart');
  }
  onPaymentClick(paymentId: any) {
    console.log("onPaymentClick");
    this.router.navigateByUrl('payment/' + paymentId);
  }
  onChatClick() {
    console.log("Chat Bot");
  }

}
