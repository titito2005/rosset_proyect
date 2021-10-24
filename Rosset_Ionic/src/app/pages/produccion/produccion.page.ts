import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ProduccionService} from 'src/app/services/produccion.service';
import { Producto } from 'src/app/types/models';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.page.html',
  styleUrls: ['./produccion.page.scss'],
})

export class ProduccionPage implements OnInit {
  constructor(private produccionService: ProduccionService,
    public modalController: ModalController) { }

  datos: boolean = false;
  listaProductos: Producto[] = [];

  async ngOnInit() {
    const querySnapshot = await this.produccionService.getProductos();
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
      this.listaProductos[contador]=producto;
      contador++;
    });
    this.datos = true;
  }
}

