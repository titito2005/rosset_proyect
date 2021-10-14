import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

import {Pedido} from 'src/app/pages/pedidos/pedidos.model' 

const db = getFirestore();

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
  authDomain: "rosset-b07bc.firebaseapp.com",
  projectId: "rosset-b07bc",
});

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  constructor() { }

  async getPedidos(){
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Pedido"));
    if (querySnapshot!=null)
    {
      return querySnapshot;
    } else
    {
      return null;
    }
  }
}
