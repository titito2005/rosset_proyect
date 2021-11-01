import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Pedido} from 'src/app/types/models';
import {PedidoService} from 'src/app/services/pedido.service';
import {Producto} from 'src/app/types/models';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.scss'],
})

export class VerPedidoComponent implements OnInit {
  @Input() pedidoId: string;
  productos: Producto[] = [];
  datos: boolean = false;
  edicion: boolean = true;

  constructor(
    private modalController: ModalController,
    private pedidoService: PedidoService,
    //private platform: Platform
    ) {}

    async ngOnInit() {
      const querySnapshot = await this.pedidoService.getProductosPorId(this.pedidoId);
      var contador = 0;
      querySnapshot.forEach((doc) => {
        let producto: Producto = {
          camisa: doc.get("Camisa"),
          cantidad: doc.get("Cantidad"),
          cuelloCam: doc.get("CuelloCam"),
          detalles: doc.get("Detalles"),
          estadoCam: doc.get("EstadoCam"),
          estadoPant: doc.get("EstadoPant"),
          estampado: doc.get("Estampado"),
          largoPant: doc.get("LargoPant"),
          mangaCam: doc.get("MangaCam"),
          nombre: doc.get("Nombre"),
          pantalon: doc.get("Pantalon"),
          pedido: doc.get("Pedido"),
          precio: doc.get("Precio"),
          tallaCam: doc.get("TallaCam"),
          tallaPant: doc.get("TallaPant"),
          tela: doc.get("Tela"),
        };
        this.productos[contador]=producto;
        contador++;
      });
      this.datos = true;
    }

    closeModal() {
      this.modalController.dismiss();
    }
}
