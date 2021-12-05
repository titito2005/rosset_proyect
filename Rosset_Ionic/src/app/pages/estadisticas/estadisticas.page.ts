import { Component, OnInit } from '@angular/core';
import {Pedido} from 'src/app/types/models';
import {PedidoService} from 'src/app/services/pedido.service';
import { UserData } from 'src/app/types/models';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor(private pedidosService: PedidoService) { }
  users: UserData[] = [];
  listaPedidos: Pedido[] = [];

  async ngOnInit() {
    this.listaPedidos = await this.pedidosService.getPedidoVendedor();
    console.log(this.listaPedidos[0].vendedor);
  }



}
