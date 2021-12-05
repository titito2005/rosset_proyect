import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

import {Producto, UserData} from '../types/models';

import {Pedido} from 'src/app/types/models'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() { }

  pedidos: Pedido[];
  productos: Producto[];

  async getPedidos(){
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Pedido"));
    this.pedidos = [];
    if (querySnapshot!=null)
    {
      querySnapshot.forEach((doc) => {
        let pedido: Pedido = {
          id: doc.get("ID"),
          usuario: doc.get("Usuario"),
          direccion: doc.get("Direccion"),
          fecha: doc.get("Fecha"),
          estado: doc.get("Estado"),
          telefono: doc.get("Telefono"),
          productos: doc.get("Productos")
        };
        this.pedidos.push(pedido as Pedido)
      });
      return this.pedidos;
    } else
    {
      return null;
    }
  }

  async getPedido(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"), where("ID", "==", Number(id)));
    const querySnapshot = await getDocs(q);
    let retorno: Pedido;
    querySnapshot.forEach((doc) => {
      let pedido: Pedido = {
        id: doc.get("ID"),
        usuario: doc.get("Usuario"),
        direccion: doc.get("Direccion"),
        estado: doc.get("Estado"),
        fecha: doc.get("Fecha"),
        telefono: doc.get("Teledono"),
        productos: doc.get("Productos")
      }
      retorno = pedido;
    });

    return retorno;
  }

  async getProductosPorId(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Producto"), where("Pedido", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot;
    } else
    {
      return null;
    }
  }

  async getCantidadProductos(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Producto"), where("Pedido", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot.size;
    } else
    {
      return null;
    }
  }

  async getCantidadPedidos(){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot.size;
    } else
    {
      return null;
    }
  }
}
