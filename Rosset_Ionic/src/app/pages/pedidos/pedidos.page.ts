import { Component, OnInit } from '@angular/core';
import {PedidoService} from 'src/app/services/pedido.service';
import {Pedido} from 'src/app/types/models' 

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

const db = getFirestore();

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(private pedidosService: PedidoService) { }

  listaPedidos: Pedido[] = [];

  async ngOnInit() {
    this.listaPedidos = await this.pedidosService.getPedidos();
  }
}
