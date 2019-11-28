import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagePage } from './message.page';
import { MessageService } from './message.service';

const routes: Routes = [
  {
    path: '',
    component: MessagePage,
    resolve: [ MessageService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePageRoutingModule {}
