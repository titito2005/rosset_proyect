import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, deleteDoc, addDoc } from "firebase/firestore";
import { writeBatch, doc, getDoc } from "firebase/firestore";
import 'firebase/firestore';

import {Producto, UserData} from '../types/models';

import {Pedido} from 'src/app/types/models'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBvSgfydy5-PrEQtAMit7dEYCPyer3mbMI",
    authDomain: "rosset-b07bc.firebaseapp.com",
    projectId: "rosset-b07bc",
  });

  constructor() { }

  pedidos: Pedido[];
  productos: Producto[];

  async getPedidos(){
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Pedido"));
    this.pedidos = [];
    if (querySnapshot!=null)
    {
      querySnapshot.forEach((doc) => {
        let pedido: Pedido = {
          id: doc.get("ID"),
          usuario: doc.get("Usuario"),
          direccion: doc.get("Direccion"),
          fecha: doc.get("Fecha"),
          estado: doc.get("Estado"),
          telefono: doc.get("Telefono"),
          productos: doc.get("Productos"),
          vendedor: doc.get("Vendedor")
        };
        this.pedidos.push(pedido as Pedido)
      });
      return this.pedidos;
    } else
    {
      return null;
    }
  }

  async getPedido(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"), where("ID", "==", Number(id)));
    const querySnapshot = await getDocs(q);
    let retorno: Pedido;
    querySnapshot.forEach((doc) => {
      let pedido: Pedido = {
        id: doc.get("ID"),
        usuario: doc.get("Usuario"),
        direccion: doc.get("Direccion"),
        estado: doc.get("Estado"),
        fecha: doc.get("Fecha"),
        telefono: doc.get("Teledono"),
        productos: doc.get("Productos"),
        vendedor: doc.get("Vendedor")
      }
      retorno = pedido;
    });

    return retorno;
  }

  async getProductosPorId(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Producto"), where("Pedido", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot;
    } else
    {
      return null;
    }
  }

  async getCantidadProductos(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Producto"), where("Pedido", "==", id));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot.size;
    } else
    {
      return null;
    }
  }

  async getCantidadPedidos(){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot!=null)
    {
      return querySnapshot.size;
    } else
    {
      return null;
    }
  }

  async eliminarProductos(id:string){
    const db = getFirestore();
    const q = query(collection(db, "Pedido"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    let idAuto;
    querySnapshot.forEach((doc) => {
      //idAuto = ${doc.id} => ${doc. data()};
    });

    await deleteDoc(doc(db, "Pedido", idAuto));
  }

  async actualizarPedido(pedido: Pedido){

  }

  async guardarPedido(pedido: Pedido){
    const db = getFirestore();
    const docRef = await addDoc(collection(db, 'Pedido'), {
      Id: pedido.id,
      Direccion: pedido.direccion,
      Estado: pedido.estado,
      Fecha: pedido.fecha,
      Productos: pedido.productos,
      Telefono: pedido.telefono,
      Usuario: pedido.usuario,
      Vendedor: pedido.vendedor
    });
  }
}
