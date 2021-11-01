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
          telefono: doc.get("Telefono")
        };
        this.pedidos.push(pedido as Pedido)
      });
      return this.pedidos;
    } else
    {
      return null;
    }
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
}
