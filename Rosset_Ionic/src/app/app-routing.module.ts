import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pedidos',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)
      },
      {
        path: ":id",
        loadChildren: () => import('./pages/guardar-pedido/guardar-pedido.module').then( m => m.GuardarPedidoPageModule)
      }
    ]
  },
  {
    path: 'produccion',
    loadChildren: () => import('./pages/produccion/produccion.module').then( m => m.ProduccionPageModule)

  },
  {
    path: 'guardar-pedido',
    loadChildren: () => import('./pages/guardar-pedido/guardar-pedido.module').then( m => m.GuardarPedidoPageModule)
  },  {
    path: 'inventario',
    loadChildren: () => import('./pages/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'guardar-tela',
    loadChildren: () => import('./pages/guardar-tela/guardar-tela.module').then( m => m.GuardarTelaPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

