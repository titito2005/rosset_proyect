import {EventEmitter, Injectable} from '@angular/core';
import {UserData} from '../types/models';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
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
}
