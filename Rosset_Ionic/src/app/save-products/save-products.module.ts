import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveProductsPageRoutingModule } from './save-products-routing.module';

import { SaveProductsPage } from './save-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveProductsPageRoutingModule
  ],
  declarations: [SaveProductsPage]
})
export class SaveProductsPageModule {}
