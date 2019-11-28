import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPage } from './setting.page';
import { SettingService } from './setting.service';

const routes: Routes = [
  {
    path: '',
    component: SettingPage,
    resolve: [ SettingService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPageRoutingModule {}
