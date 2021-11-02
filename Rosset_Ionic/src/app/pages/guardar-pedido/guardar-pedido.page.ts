import { Component, OnInit } from '@angular/core';
import {Pedido} from 'src/app/types/models';
import {PedidoService} from 'src/app/services/pedido.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-guardar-pedido',
  templateUrl: './guardar-pedido.page.html',
  styleUrls: ['./guardar-pedido.page.scss'],
})

export class GuardarPedidoPage implements OnInit {

  pedido: Pedido;
  id: string = "5";
  usuario: string = "";
  direccion: string = "";
  estado: string = "";
  fecha: string = "";
  telefono: string = "";

  constructor(private pedidosService: PedidoService, private activatedRoute: ActivatedRoute) { }


  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });
    this.pedido = await this.pedidosService.getPedido(this.id);
  }

}
