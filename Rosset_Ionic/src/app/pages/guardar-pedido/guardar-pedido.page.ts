import { Component, OnInit } from '@angular/core';
import {Pedido} from 'src/app/types/models';
import {PedidoService} from 'src/app/services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import {Producto} from 'src/app/types/models';
import { GuardarProductoComponent } from 'src/app/components/guardar-producto/guardar-producto.component';
import {ModalController} from '@ionic/angular';
import {NgForm} from '@angular/forms';


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

  productos: Producto[] = [];
  datos: boolean = false;

  constructor(private pedidosService: PedidoService, private activatedRoute: ActivatedRoute,public modalController: ModalController) { }


  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });
    this.pedido = await this.pedidosService.getPedido(this.id);
    this.id = this.pedido.id;
    this.usuario = this.pedido.usuario;
    this.direccion = this.pedido.direccion;
    this.estado = this.pedido.estado;
    this.fecha = this.pedido.fecha;

    const querySnapshot = await this.pedidosService.getProductosPorId(this.id);
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

  async viewNote(auxId: string) {
    console.log(auxId);
    const modal = await this.modalController.create({
      component: GuardarProductoComponent,
      componentProps: {
        auxId
      }
    });
    return await modal.present();
  }

  onSubmit(form: NgForm){

  }

}
