import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class GuardarProductoService {

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() { }



  async submit(form: NgForm ,shirt: boolean,pant: boolean,shirtStatus: number,pantStatus: number,producNumber: string) {
    const db = getFirestore();
    const camisa = form.value.camisa;
    const cantidad = form.value.cantidad;

    console.log(producNumber);


    const docRef = await addDoc(collection(db, 'Producto'), {
      Camisa:shirt,
      Cantidad:form.value.cantidad,
      CuelloCam:form.value.cuellocam,
      Detalles:form.value.detalles,
      EstadoCam:shirtStatus,
      EstadoPant:pantStatus,
      Estampado:form.value.estampado,
      LargoPant:form.value.largoPant,
      MangaCam:form.value.mangaCam,
      Nombre:form.value.nombre,
      Pantalon:pant,
      Pedido:producNumber,
      Precio:form.value.precio,
      TallaCam:form.value.tallaCam,
      TallaPant:form.value.tallaPan,
      Tela:form.value.tela
    });
  }
}
