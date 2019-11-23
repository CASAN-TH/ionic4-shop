import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { Facebook } from '@ionic-native/facebook/ngx';
// import { LineLogin } from '@ionic-native/line-login/ngx';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  providers:[
    // Facebook,
    // LineLogin,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ]
})
export class LoginPageModule {}
