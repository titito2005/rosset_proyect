import { Component, OnInit } from '@angular/core';
import {PedidoService} from 'src/app/services/pedido.service';
import {Pedido} from 'src/app/types/models'
import {ModalController} from '@ionic/angular';
import { getFirestore } from "firebase/firestore";

const db = getFirestore();

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(private pedidosService: PedidoService,
    public modalController: ModalController) { }

  listaPedidos: Pedido[] = [];

  async ngOnInit() {
    this.listaPedidos = await this.pedidosService.getPedidos();
  }

  async verProductos(pedidoId: string) {
    /**const modal = await this.modalController.create({
      component: VerPedidoComponent,
      componentProps: {
        pedidoId
      }
    });
    return await modal.present();
    **/
  }
}
