import {Injectable} from '@angular/core';
import {Tela} from '../types/models';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, getDoc, addDoc } from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  location = 'uploads/';
  inventario: Tela[];

  constructor(
    private angularFireStorage: AngularFireStorage
  ) { }

  async getInventario(){
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Tela"));
    this.inventario = [];
    if (querySnapshot!=null)
    {
      querySnapshot.forEach((doc) => {
        let tela: Tela = {
          id: doc.get("id"),
          foto: doc.get("foto"),
          nombre: doc.get("nombre"),
          cantidad: doc.get("cantidad"),
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

  async agregarFoto(imageData: any) {
    try {
      const fileName = new Date().getTime() + '.png';
      return new Promise((resolve, reject) => {
        const pictureRef = this.angularFireStorage.ref(this.location + fileName);
        pictureRef
          .put(imageData)
          .then(function () {
            pictureRef.getDownloadURL().subscribe((url: any) => {
              resolve(url);
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (e) {}
  }
}

