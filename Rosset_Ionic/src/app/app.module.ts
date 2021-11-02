import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Componentes
import {VerPedidoComponent} from 'src/app/components/ver-pedido/ver-pedido.component';
import { ProductoProduccionComponent } from './components/producto-produccion/producto-produccion.component';
import { GuardarProductoComponent } from './components/guardar-producto/guardar-producto.component';
import { ListaProduccionComponent } from './components/lista-produccion/lista-produccion.component';

@NgModule({
  declarations: [AppComponent,VerPedidoComponent,GuardarProductoComponent, ListaProduccionComponent, ProductoProduccionComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
