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

  listaCorte: Producto[] = [];
  listaEstampado: Producto[] = [];
  listaPlanchado: Producto[] = [];
  listaCosido: Producto[] = [];
  listaEmpacado: Producto[] = [];
  listaEntregado: Producto [] = [];

  async ngOnInit() {
    const querySnapshot = await this.produccionService.getProductos();
    var contador = 0;
    querySnapshot.forEach((doc) => {
      if(doc.get("Camisa"))
      {
        let producto_camisa: Producto = {
          camisa: doc.get("Camisa"),
          cantidad: doc.get("Cantidad"),
          cuelloCam: doc.get("CuelloCam"),
          detalles: doc.get("Detalles"),
          estadoCam: doc.get("EstadoCam"),
          estampado: doc.get("Estampado"),
          mangaCam: doc.get("MangaCam"),
          nombre: doc.get("Nombre"),
          pedido: doc.get("Pedido"),
          precio: doc.get("Precio"),
          tallaCam: doc.get("TallaCam"),
          tela: doc.get("Tela"),
          pantalon: false,
          estadoPant: 0,
          tallaPant: "",
          largoPant: 0,
        };
        this.estadoProduccion(producto_camisa);
      }

      if(doc.get("Pantalon"))
      {
        let producto_pantalon: Producto = {
        cantidad: doc.get("Cantidad"),
        detalles: doc.get("Detalles"),
        estadoPant: doc.get("EstadoPant"),
        estampado: doc.get("Estampado"),
        largoPant: doc.get("LargoPant"),
        nombre: doc.get("Nombre"),
        pantalon: doc.get("Pantalon"),
        pedido: doc.get("Pedido"),
        precio: doc.get("Precio"),
        tallaPant: doc.get("TallaPant"),
        tela: doc.get("Tela"),
        camisa: false,
        estadoCam: 0,
        mangaCam: 0,
        cuelloCam: 0,
        tallaCam: "",
        };
        this.estadoProduccion(producto_pantalon);
      }
    });
    this.datos = true;
  }

  estadoProduccion(producto: Producto)
  {
    let estado: number = 0;
    if(producto.camisa)
    {
      estado = producto.estadoCam;
    }else{
      estado = producto.estadoPant;
    }

    switch(estado)
    {
      case 0:
        this.listaCorte.push(producto);
      break;
      case 1:
        this.listaEstampado.push(producto);
      break;
      case 2:
        this.listaPlanchado.push(producto);
      break;
      case 3:
        this.listaCosido.push(producto);
      break;
      case 4:
        this.listaEmpacado.push(producto);
      break;
      case 5:
        this.listaEntregado.push(producto);
      break;
      default:
      break;
    }
  }
}

