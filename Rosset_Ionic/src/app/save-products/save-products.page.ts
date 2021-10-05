
import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-save-products',
  templateUrl: './save-products.page.html',
  styleUrls: ['./save-products.page.scss'],
})
export class SaveProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let cantidad = form.value.cantidad;
    console.log(cantidad);
    /*
    if (!form.valid) {
      return;
    }
    */
  }

}
