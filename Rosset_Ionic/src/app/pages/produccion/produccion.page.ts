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
import {ListaProduccionComponent} from 'src/app/components/lista-produccion/lista-produccion.component';
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
  cantCorte: number = 0;
  cantEstampado: number = 0;
  cantPlanchado: number = 0;
  cantCosido: number = 0;
  cantEmpacado: number = 0;
  cantEntregado: number = 0;

  async ngOnInit() {
    const querySnapshot = await this.produccionService.getProductos();
    var contador = 0;
    querySnapshot.forEach((doc) => {
      if(doc.get("Camisa"))
      {
        this.estadoProduccion(doc.get("EstadoCam"));
      }

      if(doc.get("Pantalon"))
      {
        this.estadoProduccion(doc.get("EstadoPant"));
      }
    });
    this.datos = true;
  }

  estadoProduccion(estado: number)
  {
    switch(estado)
    {
      case 0:
        this.cantCorte++;
      break;
      case 1:
        this.cantEstampado++;
      break;
      case 2:
        this.cantPlanchado++;
      break;
      case 3:
        this.cantCosido++;
      break;
      case 4:
        this.cantEstampado++;
      break;
      case 5:
        this.cantEntregado++;
      break;
      default:
      break;
    }
  }

  async verProductosPorEstado(estado:number){
    const modal = await this.modalController.create({
      component: ListaProduccionComponent,
      componentProps: {
        estado
      }
    });
    return await modal.present();
  }
}


