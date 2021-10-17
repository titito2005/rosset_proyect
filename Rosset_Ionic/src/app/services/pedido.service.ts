import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

import {UserData} from '../types/models';

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
}
