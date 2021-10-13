import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { GuardarProductosServiceService } from './guardar-productos.service.service';


const db = getFirestore();
@Component({
  selector: 'app-guardar-productos',
  templateUrl: './guardar-productos.component.html',
  styleUrls: ['./guardar-productos.component.scss'],
})
export class GuardarProductosComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  async onSubmit(form: NgForm) {
    const camisa = form.value.camisa;
    const cantidad = form.value.cantidad;
    console.log(cantidad);
    console.log(camisa);
/*
    const docRef = await addDoc(collection(db, 'Producto'), {
      Camisa:form.value.camisa,
      Cantidad:form.value.cantidad,
      CuelloCam:form.value.cuellocam,
      Detalles:form.value.cuellocam

    });
    */
    /*
    if (!form.valid) {
      return;
    }
    */
  }

}
