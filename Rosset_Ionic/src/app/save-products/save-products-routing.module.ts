import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveProductsPage } from './save-products.page';

const routes: Routes = [
  {
    path: '',
    component: SaveProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveProductsPageRoutingModule {}
