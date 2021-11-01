import { Component, OnInit } from '@angular/core';
import {Pedido} from 'src/app/types/models';

@Component({
  selector: 'app-guardar-pedido',
  templateUrl: './guardar-pedido.page.html',
  styleUrls: ['./guardar-pedido.page.scss'],
})
export class GuardarPedidoPage implements OnInit {

  constructor() { }

  pedido: Pedido;

  hola: string = "así?";

  ngOnInit() {
  }

}
