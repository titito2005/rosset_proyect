import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ProduccionService} from 'src/app/services/produccion.service';
import {Producto} from 'src/app/types/models';
import {Platform} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {ProductoProduccionComponent} from 'src/app/components/producto-produccion/producto-produccion.component';

@Component({
  selector: 'app-lista-produccion',
  templateUrl: './lista-produccion.component.html',
  styleUrls: ['./lista-produccion.component.scss'],
})
export class ListaProduccionComponent implements OnInit {
  @Input() estado: number;
  datos: boolean = false;
  productos: Producto[] = [];

  constructor(
    private modalController: ModalController,
    private produccionService: ProduccionService,
    //private platform: Platform
    ) {}

  async ngOnInit() {
    const productsArray = await this.produccionService.getProductosPorEstado(this.estado);
    console.log(productsArray);
    var contador = 0;
    productsArray.forEach((doc) => {
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

  async verProducto(producto: Producto, tipo: number){
    const modal = await this.modalController.create({
      component: ProductoProduccionComponent,
      componentProps: {
        producto,
        tipo,
      }
    });
    return await modal.present();
  }
}
