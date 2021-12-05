import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from '../environments/environment';

//Componentes
import { VerPedidoComponent } from 'src/app/components/ver-pedido/ver-pedido.component';
import { ProductoProduccionComponent } from './components/producto-produccion/producto-produccion.component';
import { GuardarProductoComponent } from './components/guardar-producto/guardar-producto.component';
import { ListaProduccionComponent } from './components/lista-produccion/lista-produccion.component';
import { VerInventarioComponent } from 'src/app/components/ver-inventario/ver-inventario.component';

@NgModule({
  declarations: [AppComponent,VerPedidoComponent,GuardarProductoComponent, ListaProduccionComponent, ProductoProduccionComponent, VerInventarioComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'photoDB'),
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
