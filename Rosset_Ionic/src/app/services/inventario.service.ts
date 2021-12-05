import {EventEmitter, Injectable} from '@angular/core';
import {Tela} from '../types/models';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc} from "firebase/firestore";
import { collection, getDocs, query, where} from "firebase/firestore";
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() { }

  inventario: Tela[];

  async getInventario(){
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Tela"));
    this.inventario = [];
    if (querySnapshot!=null)
    {
      querySnapshot.forEach((doc) => {
        let tela: Tela = {
          id: doc.get("ID"),
          foto: doc.get("Foto"),
          nombre: doc.get("Nombre"),
          cantidad: doc.get("Cantidad"),
        };
        this.inventario.push(tela as Tela)
      });
      return this.inventario;
    } else
    {
      return null;
    }
  }

  async agregarTela(form: NgForm){
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'Tela'), {
      id: form.value.id,
      foto: form.value.foto,
      nombre: form.value.nombre,
      cantidad: form.value.cantidad,
    });
  }
}
