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

  async onSubmit(form: NgForm) {
    const db = getFirestore();
    const camisa = form.value.camisa;
    const cantidad = form.value.cantidad;
    console.log(cantidad);
    console.log(camisa);

    const docRef = await addDoc(collection(db, 'Producto'), {
      Camisa:form.value.camisa,
      Cantidad:form.value.cantidad,
      CuelloCam:form.value.cuellocam,
      Detalles:form.value.detalles

    });





  }


}
