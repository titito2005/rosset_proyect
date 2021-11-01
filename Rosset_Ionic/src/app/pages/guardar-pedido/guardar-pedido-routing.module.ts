import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarPedidoPage } from './guardar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarPedidoPageRoutingModule {}
