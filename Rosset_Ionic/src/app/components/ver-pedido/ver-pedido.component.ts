import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Pedido} from 'src/app/types/models';
@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.scss'],
})
export class VerPedidoComponent implements OnInit {
  @Input() pedidoId: number;
  pedido: Pedido

  constructor(private pedidoServicio: PedidoServicio, private modalController: ModalController) {}

  ngOnInit() {
    this.pedido = this.pedidoServicio.getServicioById(this.pedidoId);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
