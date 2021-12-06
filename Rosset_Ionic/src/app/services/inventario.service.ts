import {Injectable} from '@angular/core';
import {Tela} from '../types/models';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, getDoc, addDoc, setDoc, writeBatch, updateDoc, deleteDoc } from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  inventario: Tela[];

  constructor(
    private angularFireStorage: AngularFireStorage
  ) { }
  location = 'uploads/';
  link:string;
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

  async agregarTela(form: NgForm, link:string){
    const db = getFirestore();
    /*
    const docRef = await addDoc(collection(db, 'Tela'), {
      id: new Date().getTime(),
      foto: link,
      nombre: form.value.nombre,
      cantidad: form.value.cantidad,
    });
    */
    const id = new Date().getTime().toString();
    await setDoc(doc(db, "Tela", id),{
      id: id,
      foto: link,
      nombre: form.value.nombre,
      cantidad: form.value.cantidad,
    });
  }

  async updateTela(tela: Tela){
    const db = getFirestore();
    await updateDoc(doc(db, "Tela", tela.id.toString()),{
      foto: tela.foto,
      nombre: tela.nombre,
      cantidad: tela.cantidad,
    })
  }

  async deleteTela(tela: Tela){
    const db = getFirestore();
    await deleteDoc(doc(db, "Tela", tela.id.toString()));
  }

  agregarFoto(blob: Blob):Promise<string>{
    try {
      const fileName = new Date().getTime() + '.png';
      return new Promise((resolve, reject) => {
        const pictureRef = this.angularFireStorage.ref(this.location + fileName);
        pictureRef
          .put(blob)
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
