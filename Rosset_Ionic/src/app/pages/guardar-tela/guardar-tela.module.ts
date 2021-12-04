import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarTelaPageRoutingModule } from './guardar-tela-routing.module';

import { GuardarTelaPage } from './guardar-tela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarTelaPageRoutingModule
  ],
  declarations: [GuardarTelaPage]
})
export class GuardarTelaPageModule {}
