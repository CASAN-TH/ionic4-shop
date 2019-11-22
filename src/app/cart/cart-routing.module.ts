import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPage } from './cart.page';
import { CartService } from './cart.service';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CartPage,
    resolve: [CartService],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule { }
