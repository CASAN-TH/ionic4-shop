import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'phoneno',
    loadChildren: () => import('./auth/phoneno/phoneno.module').then(m => m.PhonenoPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./auth/otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./auth/password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'regcredit',
    loadChildren: () => import('./pages/regcredit/regcredit.module').then(m => m.RegcreditPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('../app/pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('../app/pages/promotion/promotion.module').then(m => m.PromotionPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('../app/productdetail/productdetail.module').then(m => m.ProductdetailPageModule)
  },
  {
    path: 'gifts',
    loadChildren: () => import('../app/gifts/gifts.module').then(m => m.GiftsPageModule)
  },
  {
    path: 'me',
    loadChildren: () => import('../app/pages/me/me.module').then(m => m.MePageModule)
  }
  ,
  {
    path: 'payment',
    loadChildren: () => import('../app/pages/payment/payment.module').then(m => m.PaymentPageModule)
  } ,
  {
    path: 'message',
    loadChildren: () => import('../app/message/message.module').then(m => m.MessagePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
