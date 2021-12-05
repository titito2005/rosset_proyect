import { Component, OnInit } from '@angular/core';
import {Pedido} from 'src/app/types/models';
import {PedidoService} from 'src/app/services/pedido.service';
import { UserData } from 'src/app/types/models';
import {UserService} from 'src/app/services/user.service';
import {Producto} from 'src/app/types/models';
interface Vendedor{
  nombre: string;
  cantidadPedidos: number;
  pedidosEntregado: number;
}

interface PrecioPedidos{
  id: string;
  precioPedido: number;
}
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})

export class EstadisticasPage implements OnInit {

  constructor(private pedidosService: PedidoService,private userService: UserService) { }
  users: UserData[] = [];
  listaPedidos: Pedido[] = [];
  listaVendedores:Vendedor[]=[];
  datos: boolean = false;
  productos: Producto[] = [];

  async ngOnInit() {
    this.getUsuarios();
    this.listaPedidos = await this.pedidosService.getPedidos();
    this.getVendedores();
    this.getCantidadPedidos();
  }

  async getUsuarios(){
    const querySnapshot = await this.userService.getUsers();
    var contador = 0;
    querySnapshot.forEach((doc) => {
      let user: UserData = {
        nombre: doc.get("Nombre"),
        tipo: doc.get("Tipo"),
        contrasenna: doc.get("Contraseña"),
      };
      this.users[contador]=user;
      contador++;
    });
    this.datos = true;
  }

getCantidadPedidos(){
this.listaVendedores.forEach((indiceVendedores)=>{
  this.listaPedidos.forEach((indice)=>{
    if(indiceVendedores.nombre === indice.vendedor){
        indiceVendedores.cantidadPedidos++;
        if(indice.estado === 'Entregado'){
          indiceVendedores.pedidosEntregado++;
        }
    }
  });

});
}

getVendedores(){
  let contador = 0;
  this.users.forEach((indice)=>{
    if(indice.tipo === 'Vendedor'){
    const vendedor: Vendedor = {
        nombre: indice.nombre,
        cantidadPedidos: 0,
        pedidosEntregado:0,
    };
    this.listaVendedores[contador]=vendedor;
    contador++;
  }
  });
}

calcularPrecioPedido(){
// falta hacer esto
}



}
