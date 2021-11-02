import {EventEmitter, Injectable} from '@angular/core';
import {UserData} from '../types/models';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})

export class ProduccionService {

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() { }

  async getProductos()
  {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Producto"));
    if (querySnapshot!=null)
    {
      return querySnapshot;
    } else
    {
      return null;
    }
  }

  async getProductosPorEstado(estado: number)
  {
    const db = getFirestore();
    const q1 = query(collection(db, "Producto"), where("EstadoCam", "==", estado));
    const q2 = query(collection(db, "Producto"), where("EstadoPant", "==", estado));
    const querySnapshot1 = await getDocs(q1);
    const querySnapshot2 = await getDocs(q2);

    const productsArray1 = querySnapshot1.docs;
    const productsArray2 = querySnapshot2.docs;

    productsArray1.concat(productsArray2);
    if (productsArray1!=null)
    {
      return productsArray1;
    } else
    {
      return null;
    }
  }
}
