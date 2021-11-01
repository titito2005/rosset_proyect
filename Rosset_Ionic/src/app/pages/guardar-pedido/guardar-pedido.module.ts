import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarPedidoPageRoutingModule } from './guardar-pedido-routing.module';

import { GuardarPedidoPage } from './guardar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarPedidoPageRoutingModule
  ],
  declarations: [GuardarPedidoPage]
})
export class GuardarPedidoPageModule {}
