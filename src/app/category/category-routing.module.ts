import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPage } from './category.page';
import { CategoryService } from './category.service';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage,
    resolve: [ CategoryService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
