import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarTelaPage } from './guardar-tela.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarTelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarTelaPageRoutingModule {}
